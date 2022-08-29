import classes from "./AntiButton.module.scss";

const AntiButton = (props) => {
  const { children, className, ...buttonProps } = props;

  return (
    <button
      className={`
      ${classes.AntiButton}
      ${className || ""}
    `}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default AntiButton;
