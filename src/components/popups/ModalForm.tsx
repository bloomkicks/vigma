import { useRouter } from "next/router";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import sendEmail from "@/utils/send-email";
import { RefObject, useRef } from "react";
import telInputHandler from "@/utils/tel-input-handler";
import type { PopupProps } from "@/data/popups";
import { useState } from "react";
import useForm from "@/hooks/use-form";

const ModalForm = ({
  inputs,
  button: buttonText,
  onFormSubmit,
}: {
  inputs: PopupProps["inputs"];
  button: string;
  onFormSubmit: (status: string) => void;
}) => {
  const quiz = useSelector((state: RootState) => state.quiz);
  const router = useRouter();
  const telRef = useRef() as RefObject<HTMLInputElement>;
  const nameRef = useRef() as RefObject<HTMLInputElement>;
  const addressRef = useRef() as RefObject<HTMLInputElement>;
  const [isValid, setIsValid] = useState({
    tel: false,
    name: false,
    address: true,
  });
  const [isStarted, setIsStarted] = useState({
    tel: false,
    name: false,
  });

  async function onSubmit() {
    try {
      await sendEmail(
        telRef.current!.value,
        nameRef.current!.value,
        quiz,
        addressRef.current ? addressRef.current.value : undefined,
        router.asPath
      );
      try {
        (window as any).ym(
          process.env.METRICA_KEY,
          "reachGoal",
          "order_sent"
        );
      } catch (err) {
        console.log(
          "[Данные для аналитики]: Ошибка с отправкой Яндекс цели - order_sent"
        );
      }
      onFormSubmit("success");
    } catch (err) {
      onFormSubmit("error");
    }
    telRef.current!.value = "";
    nameRef.current!.value = "";
    if (addressRef.current) addressRef.current.value = "";
    clearState();
    setIsStarted({
      tel: false,
      name: false,
    });
    setIsValid({
      tel: false,
      name: false,
      address: true,
    });
  }

  const { submitHandler, clearState, isSuccess, error, notValid } =
    useForm({
      onSubmit,
      isValid: !!(isValid["tel"] && isValid.name),
    });

  function getRefName(name: string) {
    if (name === "name") {
      return nameRef;
    } else if (name === "tel") {
      return telRef;
    } else {
      return addressRef;
    }
  }

  function changeHandler(name: string) {
    return (e: any) => {
      let isTelValid =
        telRef.current!.value.replace(/[^\d]/g, "").length >= 11;
      let isNameValid = nameRef.current!.value.length >= 1;
      setIsStarted((prev) => ({
        tel: prev["tel"] || name === "tel",
        name: prev.name || name === "name",
      }));
      setIsValid((prev) => ({
        tel: isTelValid || name === "tel",
        name: isNameValid || name === "name",
        address: true,
      }));
      if (name === "tel") {
        telInputHandler(e);
      }
    };
  }

  function blurHandler(e: any) {
    let isTelValid =
      telRef.current!.value.replace(/[^\d]/g, "").length >= 11;
    let isNameValid = nameRef.current!.value.length >= 1;
    setIsValid({
      tel: isTelValid,
      name: isNameValid,
      address: true,
    });
  }

  return (
    <form method="POST" onSubmit={submitHandler} className="w-full">
      {inputs.map((input) => {
        let isError =
          (isStarted[input.name as keyof typeof isStarted] ||
            notValid) &&
          !isValid[input.name as keyof typeof isValid];

        return (
          <div key={input.name} className="mb-3.5">
            <label
              htmlFor={input.name}
              className={
                "block mb-1.5 " +
                (isError
                  ? "text-error animate-[shake_400ms_ease-in]"
                  : "")
              }
            >
              {input.label}
            </label>
            <input
              type={input.type}
              id={input.name}
              placeholder={input.placeholder}
              onBlur={blurHandler}
              onChange={changeHandler(input.name)}
              ref={getRefName(input.name)}
              className={`max-w-[350px] w-[260px] placeholder:text-[rgba(0,0,0,0.7)] lg:w-[90%] ${
                input.type === "tel" ? "numbers" : ""
              } ${isError ? "!border-error" : ""}`}
            />
          </div>
        );
      })}
      <button
        type="submit"
        className="button bg-primary mt-8 shadow-normal disabled:hover:!bg-primary"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default ModalForm;
