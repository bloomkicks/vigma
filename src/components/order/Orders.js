import OrderSection from "./OrderSection";
import classes from "./Orders.module.css";

const Orders = (props) => {
  return (
    <div className={classes.Orders}>
      {props.orders.map((order) => {
        return (
          <OrderSection {...order} key={Math.random()} />
        );
      })}
    </div>
  );
};

export default Orders;
