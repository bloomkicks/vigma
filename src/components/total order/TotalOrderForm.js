import Secondary from "../ui/Secondary";
import Input from "../ui/Input";
import classes from "./TotalOrderForm.module.css";
import { useLocation } from 'react-router-dom';

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
          children: <Secondary>Ваше имя</Secondary>,
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
          children: <Secondary>Номер телефона</Secondary>,
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
          children: <Secondary>Адрес эл. почты</Secondary>,
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
          children: <Secondary>Оставьте комментарий</Secondary>,
        }}
        input={{
          props: {
            rows: '3',
            placeholder: "Ваш комментарий",
          },
          className: classes.CommentInput,
        }}
      />
    </form>
  );
};

export default TotalOrderForm;
