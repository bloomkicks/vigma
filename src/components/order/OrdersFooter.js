import { useRouter } from "next/router";
const arrowSvg = "/order-assets/next-arrow.svg";
import Third from "../ui/Third";
import classes from "./OrdersFooter.module.css";

const OrdersFooter = (props) => {
  const { children, query, ...footerProps } = props;
  const router = useRouter();

  const clickHandler = (e) => {
    const searchParams = new URLSearchParams(router.query);
    let lastCloset = "";
    searchParams.forEach((value, key) => (lastCloset = key));
    searchParams.delete(lastCloset)

    router.push(`${location.pathname}?${searchParams}`);
  };

  return (
    <div className={classes.OrdersFooter}>
      <img
        onClick={clickHandler}
        src={arrowSvg}
        alt="Назад"
        className={classes.Arrow}
      />
      <Third>{children}</Third>
    </div>
  );
};

export default OrdersFooter;
