import { useLocation, useNavigate } from "react-router-dom";
import arrowSvg from "../../assets/order/next-arrow.svg";
import Third from "../ui/Third";
import classes from "./OrdersFooter.module.css";

const OrdersFooter = (props) => {
  const { children, query, ...footerProps } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    const searchParams = new URLSearchParams(location.search);
    let lastEntry = ''
    searchParams.forEach((value, key) => lastEntry = key)
    searchParams.delete(lastEntry)

    navigate(`${location.pathname}?${searchParams}`)
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
