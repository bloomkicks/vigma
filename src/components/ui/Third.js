import classes from "./Third.module.scss";

const Third = (props) => {
  const { children, ...thirdProps } = props;

  return (
    <h3 {...thirdProps} className={classes.Third}>
      {children}
    </h3>
  );
};

export default Third;
