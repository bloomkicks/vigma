import { useRef, useState } from "react";
import { send } from "@emailjs/browser";

import MainButton from "../ui/MainButton";
import Third from "../ui/Third";
import Input from "../ui/Input";
import Spinner from "../ui/Spinner";
import OrderedModal from "./OrderedModal";
import antiButtonClasses from "../ui/AntiButton.module.scss";
import classes from "./TotalOrderForm.module.css";
import { useRouter } from "next/router";

const SERVICE_ID = "service_kiq0jp9";
const TEMPLATE_ID = "template_hci5war";
const USER_ID = "user_2FU0yfDjTaoUzX8yIWhal";

const TotalOrderForm = (props) => {
  const router = useRouter();
  const isFirstRendered = useRef(true)
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Client info
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const orderHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const number = numberRef.current.value.trim();
    const comment = commentRef.current.value.trim();

    const isEmailValid = email.match(/^.*@[A-Za-z]+\.[A-Za-z]+$/g);
    const isNameValid = name.length > 2;
    const isNumberValid = number.match(/\d+/g) && number.length >= 7;

    const isFormValid = isEmailValid && isNameValid && isNumberValid;
    if (!isFormValid) {
      setError({
        status: "Неверная форма",
        text: "Вы должны заполнить все поля правильно (кроме комментария)",
      });

      return;
    }

    setIsLoading(true);

    const orderParams = {};
    props.orderInfo.map((info, index) => {
      switch (index) {
        case 0:
          orderParams.type = info.property;
          break;
        case 1:
          if (info.key == 'Форма') {
            orderParams.shape = info.property;
          }
          else {
            orderParams.materials = info.property;
          }
          break;
        case 2:
          orderParams.materials = info.property;
          break;
      }
    });
    const emailParams = {
      name,
      number,
      email,
      comment,
      ...orderParams,
    };

    try {
      await send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID);
      setIsLoading(false)
      setIsSent(true);
    } catch (err) {
      setIsLoading(false)
      setError(err);
    }
  };

  const closeHandler = (e) => {
    router.push("/main");
  };

  const telInputHandler = (e) => {
    let cleanNumber = e.target.value.replace(/[^\d]/g, "");
    if (isFirstRendered.current) {
      isFirstRendered.current = false
      cleanNumber = '7'
    }
    if (!cleanNumber) return e.target.value=''; 
    const number = [
      cleanNumber[0],
      cleanNumber.slice(1, 4),
      cleanNumber.slice(4, 7),
      cleanNumber.slice(7, 9),
      cleanNumber.slice(9, 11),
    ];
    let formattedNumber = "";
    const addNumber = (prefix, group) => {
      if (group) {
        formattedNumber += prefix + group;
      } else {
      }
    };
    const signs = ["+", " (", ") ", " ", "-"];
    number.forEach((group) => addNumber(signs.splice(0, 1), group));

    e.target.value = formattedNumber;
  };

  if (isLoading) return <Spinner text="Загрузка..." />;

  return (
    <>
      {error && (
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
      )}
      {isSent && (
        <OrderedModal
          status="Заказ успешно отправлен!"
          onClose={closeHandler}
          text="В скором времени вам позвонит менеджер и договорится о встрече"
        />
      )}
      <form className={classes.TotalOrderForm} onSubmit={orderHandler}>
        <div>
          <Input
            label={{
              children: <Third>Ваше имя</Third>,
            }}
            input={{
              props: {
                ref: nameRef,
                type: "text",
                placeholder: "Имя",
              },
              className: classes.MinInput,
            }}
          />
          <Input
            label={{
              children: <Third>Номер телефона</Third>,
            }}
            input={{
              props: {
                ref: numberRef,
                type: "tel",
                placeholder: "+_ (___) ___ __-__",
                onInput: telInputHandler,
                onBlur: telInputHandler,
                onFocus: telInputHandler,
              },
              className: classes.MinInput,
            }}
          />
        </div>
        <Input
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
          }}
        />
        <Input
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
          Оставить заявку
        </MainButton>
      </form>
    </>
  );
};

export default TotalOrderForm;
