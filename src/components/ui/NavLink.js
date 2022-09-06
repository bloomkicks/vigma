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
      <a
        className={`
          ${classes.Link}
          ${(isBlack && classes.black) || ""}
          ${className || ""}
        `.trim()}
        {...linkProps}
      >
        <p className={innerClassName}>{children}</p>
      </a>
    </Link>
  );
};

export default NavLink;
