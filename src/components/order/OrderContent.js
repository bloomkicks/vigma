import OrdersFooter from "./OrdersFooter";
import AntiButton from "../ui/AntiButton";
import Question from "../ui/Question";
import Content from "../layout/Content";
import Orders from "./Orders";
import Link from "next/link";
import classes from "./OrderContent.module.css";

const OrderContent = (props) => {
  const { question, title, ...orderContent } = props;

  return (
    <Content className={classes.OrderContent}>
      <Question>{props.question}</Question>
      <Orders orders={props.orders} />
      {!title ? (
        <Link href="/contacts" passHref>
          <AntiButton><p>По Телефону</p></AntiButton>
        </Link>
      ) : (
        <OrdersFooter>{title}</OrdersFooter>
      )}
    </Content>
  );
};

export default OrderContent;
