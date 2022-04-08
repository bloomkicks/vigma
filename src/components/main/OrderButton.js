import Link from "next/link";
import MainButton from "../ui/MainButton";
import classes from "./OrderButton.module.css";

const OrderButton = (props) => {
  return (
    <Link href="/order/quiz" passHref>
      <MainButton tabIndex={5} className={classes.Button}>
        <p>Заказать дизайн-проект</p>
      </MainButton>
    </Link>
  );
};

export default OrderButton;
