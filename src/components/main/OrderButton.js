import Link from "next/link";
import MainButton from "../ui/MainButton";
import classes from "./OrderButton.module.css";

const OrderButton = (props) => {
  return (
    <Link href="/order/quiz" passHref>
      <MainButton tabIndex={5} className={classes.Button}>
        <p
          style={{
            lineHeight: "1em",
            verticalAlign: "baseline",
            display: "inline-block",
          }}
        >
          Предварительно Рассчитать
        </p>
      </MainButton>
    </Link>
  );
};

export default OrderButton;
