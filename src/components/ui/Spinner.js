import classes from "./Spinner.module.scss";

const Spinner = (props) => {
  return (
    <div className={classes.SpinnerWrapper}>
      <div className={classes.Spinner}></div>
      {props.text && <span>{props.text}</span>}
    </div>
  );
};

export default Spinner