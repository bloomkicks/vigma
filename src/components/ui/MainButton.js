import classes from "./MainButton.module.scss";

const MainButton = (props) => {
  const { children, className, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={`${classes.Button} ${className || ""}`}>
      {children}
    </button>
  );
};

export default MainButton;
