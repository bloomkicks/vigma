import Link from "next/link";
import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  const { href, children, className, ...anchorProps } = props;

  return (
    <Link href={href || ""} passHref>
      <a className={`${classes.Anchor} ${className || ""}`} {...anchorProps}>
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
