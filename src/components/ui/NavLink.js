import Link from "next/link";
import classes from "./NavLink.module.scss";

const NavLink = (props) => {
  const { className, innerClassName, img, href, children, ...linkProps } =
    props;

  return (
    
    <Link href={href || ""} passHref>
      <div
        className={`
        ${classes.Link}
        ${className || ""}
      `.trim()}
        {...linkProps}
      >
        <div className={innerClassName}>{children}</div>
      </div>
    </Link>
  );
};

export default NavLink;
