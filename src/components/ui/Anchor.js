import Link from "next/link";
import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  const { href, children, className, ...anchorProps } = props;

  return (
    
    <Link href={href || ""} passHref>
      <div className={`${classes.Anchor} ${className || ""}`} {...anchorProps}>
        {children}
      </div>
    </Link>
  );
};

export default Anchor;
