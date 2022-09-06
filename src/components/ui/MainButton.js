import classes from "./MainButton.module.scss";

const MainButton = (props) => {
  const { children, className, component, ...buttonProps } = props;

  let Component = component || "button";

  return (
    <Component
      {...buttonProps}
      className={`${classes.Button} ${className || ""}`}
    >
      {children}
    </Component>
  );
};

export default MainButton;
