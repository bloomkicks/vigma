import classes from "./Secondary.module.scss";

const Secondary = (props) => {
  const { children, className, ...secondaryProps } = props;

  return (
    <h2
      {...secondaryProps}
      className={`${classes.Secondary} ${className || ""}`}
    >
      {children}
    </h2>
  );
};

export default Secondary;
