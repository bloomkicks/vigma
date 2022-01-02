import OrdersFooter from './OrdersFooter'
import AntiButton from "../ui/AntiButton";
import Question from "../ui/Question";
import Content from "../layout/Content";
import Orders from "./Orders";
import classes from "./OrderContent.module.css";

const OrderContent = (props) => {
  const { question, ...orderContent } = props;

  return (
    <Content className={classes.OrderContent}>
      <Question>{props.question}</Question>
      <Orders orders={props.orders} />
      {!props.title && <AntiButton>По Телефону</AntiButton>}
      <OrdersFooter>{props.title}</OrdersFooter>
    </Content>
  );
};

export default OrderContent;
