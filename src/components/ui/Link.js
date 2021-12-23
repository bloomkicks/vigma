import { NavLink } from "react-router-dom";
import classes from "./Link.module.scss";

const Link = (props) => {
  const { className, innerClassName, img, href, children, ...linkProps } =
    props;

  return (
    <NavLink
      to={href}
      {...linkProps}
      className={({isActive}) => { return `
          ${classes.Link}
          ${isActive && classes.LinkActive}
          ${className || ""}
        `.trim()
      }}
      exact
    >
      <div className={innerClassName}>{children}</div>
    </NavLink>
  );
};

export default Link;
