import MainButton from "../ui/MainButton";
import Third from "../ui/Third";
import Input from "../ui/Input";
import classes from "./TotalOrderForm.module.css";
import antiButtonClasses from "../ui/AntiButton.module.scss";

const TotalOrderForm = (props) => {
  const telChangeHandler = (e) => {
    const base = "+_ (___) ___-__-__";
    const value = e.target.value;
  };

  const orderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.TotalOrderForm} onSubmit={orderHandler}>
      <Input
        label={{
          children: <Third>Ваше имя</Third>,
        }}
        input={{
          props: {
            type: "text",
            placeholder: "Имя",
          },
        }}
      />
      <Input
        label={{
          children: <Third>Номер телефона</Third>,
        }}
        input={{
          props: {
            type: "tel",
            placeholder: "+_ (___) ___-__-__",
          },
        }}
      />
      <Input
        label={{
          children: <Third>Адрес эл. почты</Third>,
          props: {
            title: "Адрес электронной почты",
          },
        }}
        input={{
          props: {
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
            rows: "3",
            placeholder: "Ваш комментарий",
          },
          className: classes.CommentInput,
        }}
      />
      <button
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
      </button>
      <MainButton className={classes.MainButton}>Оставить заявку</MainButton>
    </form>
  );
};

export default TotalOrderForm;
