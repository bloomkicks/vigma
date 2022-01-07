import MainButton from "../ui/MainButton";
import AntiButton from "../ui/AntiButton";
import Third from "../ui/Third";
import Input from "../ui/Input";
import classes from "./TotalOrderForm.module.css";

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
            rows: '3',
            placeholder: "Ваш комментарий",
          },
          className: classes.CommentInput,
        }}
      />
      <AntiButton className={classes.AntiButton}>Прикрепить чертеж</AntiButton>
      <MainButton className={classes.MainButton}>Оставить заявку</MainButton>
    </form>
  );
};

export default TotalOrderForm;
