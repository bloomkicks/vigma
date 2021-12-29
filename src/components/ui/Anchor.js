import { Link } from "react-router-dom";
import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  const { href, children, ...anchorProps } = props;

  return (
    <Link {...anchorProps} to={href || '#'} className={classes.Anchor}>
      {children}
    </Link>
  );
};

export default Anchor;
