import classes from "./NavLink.module.scss";

const NavLink = (props) => {
  const { className, innerClassName, img, href, children, ...linkProps } =
    props;

  return (
    <a
      {...linkProps}
      href={href || ""}
      className={`
        ${classes.Link}
        ${className || ""}
      `.trim()}
    >
      <div className={innerClassName}>{children}</div>
    </a>
  );
};

export default NavLink;
