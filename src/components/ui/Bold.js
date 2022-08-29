import classes from "./Bold.module.scss";

const Bold = (props) => {
  return <b className={classes.Important}>{props.children}</b>;
};

export default Bold;
