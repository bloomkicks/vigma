import OrdersFooter from "./OrdersFooter";
import AntiButton from "../ui/AntiButton";
import Question from "../ui/Question";
import Content from "../layout/Content";
import Orders from "./Orders";
import Link from "next/link";
import classes from "./OrderContent.module.css";

const OrderContent = (props) => {
  const { question, ...orderContent } = props;

  return (
    <Content className={classes.OrderContent}>
      <Question>{props.question}</Question>
      <Orders orders={props.orders} />
      {!props.title ? (
        
        <Link href="/contacts">
          <AntiButton>По Телефону</AntiButton>
        </Link>
      ) : (
        <OrdersFooter>{props.title}</OrdersFooter>
      )}
    </Content>
  );
};

export default OrderContent;
