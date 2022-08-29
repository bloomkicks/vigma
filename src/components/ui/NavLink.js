import Link from "next/link";
import classes from "./NavLink.module.scss";

const NavLink = (props) => {
  const {
    className,
    innerClassName,
    isBlack,
    img,
    href,
    children,
    ...linkProps
  } = props;

  return (
    <Link href={href || ""} passHref>
      <div
        className={`
          ${classes.Link}
          ${(isBlack && classes.black) || ""}
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
