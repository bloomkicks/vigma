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
      <div>{children}</div>
    </button>
  );
};

export default AntiButton;
