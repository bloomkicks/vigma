import { useRouter } from "next/router";
import Secondary from "../ui/Secondary";
import classes from "./OrdersTitle.module.css";

const arrowSvg = "/order-assets/next-arrow.svg";
const OrdersTitle = (props) => {
  const { children, query, ...footerProps } = props;
  const router = useRouter();

  const clickHandler = (e) => {
    const searchParams = new URLSearchParams(router.query);
    let lastCloset = "";
    searchParams.forEach(
      (value, key) => (lastCloset = key)
    );
    searchParams.delete(lastCloset);

    router.push(`${location.pathname}?${searchParams}`);
  };

  return (
    <div
      className={classes.OrdersTitle}
      onClick={clickHandler}
    >
      <img
        src={arrowSvg}
        alt="Назад"
        className={classes.Arrow}
      />
      <Secondary style={{ cursor: "pointer" }}>
        {children}
      </Secondary>
    </div>
  );
};

export default OrdersTitle;
