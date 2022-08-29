import { useRef, useState } from "react";
import { send } from "@emailjs/browser";

import MainButton from "../ui/MainButton";
import Third from "../ui/Third";
import Input from "../ui/Input";
import Spinner from "../ui/Spinner";
import OrderedModal from "./OrderedModal";
import classes from "./TotalOrderForm.module.css";
import { useRouter } from "next/router";

const SERVICE_ID = "service_kiq0jp9";
const TEMPLATE_ID = "template_hci5war";
const USER_ID = "user_2FU0yfDjTaoUzX8yIWhal";

function telInputHandler(e) {
  let cleanNumber = e.target.value.replace(/[^\d]/g, "");

  if (!cleanNumber) return (e.target.value = "");
  const number = [
    cleanNumber[0],
    cleanNumber.slice(1, 4),
    cleanNumber.slice(4, 7),
    cleanNumber.slice(7, 9),
    cleanNumber.slice(9, 11),
  ];
  let formattedNumber = "";

  const addNumbers = (prefix, group) => {
    if (group) {
      formattedNumber += prefix + group;
    }
  };
  const signs = ["+", " (", ") ", " ", "-"];
  number.forEach((group) => addNumbers(signs.shift(), group));

  e.target.value = formattedNumber;
}

function getTrim(ref) {
  return ref.current.value.trim();
}

const TotalOrderForm = (props) => {
  const router = useRouter();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Client info
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const { item } = props;

  const orderHandler = async (e) => {
    e.preventDefault();

    const email = getTrim(emailRef);
    const name = getTrim(nameRef);
    const number = getTrim(numberRef);
    const comment = getTrim(commentRef);

    const isNameValid = name.length > 2;
    let isEmailValid = email.match(/^.*@[A-Za-z]+\.[A-Za-z]+$/g);
    let isNumberValid =
      (number.match(/\d+/g) && number.length >= 7) || isEmailValid;

    isEmailValid = isEmailValid || isNumberValid;

    const isFormValid = isEmailValid && isNameValid && isNumberValid;
    if (!isFormValid) {
      setError({
        status: "Неверная форма",
        text: "Вы должны заполнить все поля правильно (кроме комментария)",
      });

      return;
    }

    setIsLoading(true);

    const clientInfo = {
      name,
      number,
      email,
      comment,
    };

    const orderInfo = props.orderInfo.map((info) => info.actual);

    const emailParams = {
      item,
      ...orderInfo,
      ...clientInfo,
    };

    try {
      await send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID);
      setIsLoading(false);
      setIsSent(true);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  const closeHandler = (e) => {
    router.push("/main");
  };

  if (isLoading) return <Spinner text="Загрузка..." />;

  if (error)
    return (
      <OrderedModal
        status={error.status || "Ошибка"}
        onClose={() => {
          setError(false);
          setIsSent(false);
          setIsLoading(false);
        }}
        text={
          error.text || "Что-то пошло не так. Пожалуйста, повторите попытку"
        }
      />
    );

  if (isSent)
    return (
      <OrderedModal
        status="Заказ успешно отправлен!"
        onClose={closeHandler}
        text="В скором времени вам позвонит менеджер и договорится о встрече"
      />
    );

  return (
    <>
      <form className={classes.TotalOrderForm} onSubmit={orderHandler}>
        <Input
          id="name-input"
          isNeeded
          label={{
            children: <Third>Ваше имя</Third>,
          }}
          input={{
            props: {
              required: true,
              ref: nameRef,
              type: "text",
              placeholder: "Имя",
            },
          }}
        />
        <div>
          <Input
            isNeeded
            id="number-input"
            label={{
              children: <Third>Номер телефона</Third>,
            }}
            input={{
              props: {
                ref: numberRef,
                type: "tel",
                placeholder: "+_ (___) ___ __-__",
                onInput: telInputHandler,
                required: true,
              },
              className: classes.MinInput,
            }}
          />
          <Input
            id="email-input"
            label={{
              children: <Third>Адрес эл. почты</Third>,
              props: {
                title: "Адрес электронной почты",
              },
            }}
            input={{
              props: {
                ref: emailRef,
                type: "email",
                placeholder: "example@gmail.com",
              },
              className: classes.MinInput,
            }}
          />
        </div>
        <Input
          id="comment-input"
          InputElement="textarea"
          label={{
            children: <Third>Оставьте комментарий</Third>,
          }}
          input={{
            props: {
              ref: commentRef,
              rows: "3",
              placeholder: "Ваш комментарий",
            },
            className: classes.CommentInput,
          }}
        />
        {/* <button
        className={`${antiButtonClasses.AntiButton} ${classes.FileInputWrapper}`}
      >
        <label htmlFor="blueprint-input">
          Прикрепить чертеж
          <input
            type="file"
            className={classes.FileInput}
            multiple
            name="blueprint_files"
            id="blueprint-input"
          />
        </label>
      </button> */}
        <MainButton type="submit" className={classes.MainButton}>
          <p>Оставить заявку</p>
        </MainButton>
      </form>
    </>
  );
};

export default TotalOrderForm;
