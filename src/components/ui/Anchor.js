import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  const { href, children, className, ...anchorProps } = props;

  return (
    <a
      href={href || ""}
      className={`${classes.Anchor} ${className || ""}`}
      {...anchorProps}
      tabIndex="1"
    >
      {children}
    </a>
  );
};

export default Anchor;
