import OrdersTitle from "./OrdersTitle";
import AntiButton from "../ui/AntiButton";
import Content from "../layout/Content";
import Orders from "./Orders";
import Link from "next/link";
import classes from "./OrderContent.module.css";

const OrderContent = (props) => {
  const { question, title, ...orderContent } = props;

  return (
    <Content className={classes.OrderContent}>
      {title && <OrdersTitle>{title}</OrdersTitle>}
      <Orders orders={props.orders} />
      {!title && (
        <Link href="/contacts" passHref>
          <AntiButton>
            <p>По Телефону</p>
          </AntiButton>
        </Link>
      )}
    </Content>
  );
};

export default OrderContent;
