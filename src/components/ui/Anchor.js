import { Link } from "react-router-dom";
import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  const { href, children, className, ...anchorProps } = props;

  return (
    <Link
      {...anchorProps}
      to={href || "#"}
      className={`${classes.Anchor} ${className || ""}`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
