import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  const { href, children, className, ...anchorProps } = props;

  return (
    <a
      href={href || ""}
      {...anchorProps}
      className={`${classes.Anchor} ${className || ""}`}
    >
      {children}
    </a>
  );
};

export default Anchor;
