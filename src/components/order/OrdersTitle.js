import { useDispatch } from "react-redux";
import { quizActions } from "../../store/quiz";
import Secondary from "../ui/Secondary";
import classes from "./OrdersTitle.module.scss";

const arrowSvg = "/order-assets/next-arrow.svg";
const OrdersTitle = (props) => {
  const { children, query, ...footerProps } = props;
  const dispatch = useDispatch()

  const clickHandler = (e) => {
    dispatch(quizActions.back())
  };

  return (
    <div className={classes.OrdersTitle} onClick={clickHandler}>
      <img src={arrowSvg} alt="Назад" className={classes.Arrow} />
      <Secondary style={{ cursor: "pointer" }}>{children}</Secondary>
    </div>
  );
};

export default OrdersTitle;
