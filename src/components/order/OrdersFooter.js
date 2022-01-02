import Third from '../ui/Third'
import classes from "./OrdersFooter.module.css";

const OrdersFooter = (props) => {
  const { children, ...footerProps } = props;

  return (
    <div className={classes.OrdersFooter}>
      <div className={classes.Arrow}></div>
      <Third>{children}</Third>
      <div className={`${classes.Arrow} ${classes.Right}`}></div>
    </div>
  );
};

export default OrdersFooter;
