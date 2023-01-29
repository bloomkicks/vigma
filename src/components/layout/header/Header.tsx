import { useState, useEffect } from "react";

import HeaderMenuSetter from "./HeaderMenuSetter";
import HeaderLogo from "./HeaderLogo";
import NavLink from "../../ui/NavLink";
import classes from "./Header.module.scss";

let links = [
  {
    link: "/main#contacts",
    title: "Контакты",
  },
  {
    link: "/catalog",
    title: "Каталог Кухонь",
  },
  {
    link: "/order",
    title: "Расчёт Стоимости",
  },
];

const Header = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenuHandler = (e) => {
    e.stopPropagation();
    setIsMenuActive((prevState) => {
      if (prevState) {
        e.target.blur();
      }
      return !prevState;
    });
  };
  const navFocusHandler = (e) => {
    e.stopPropagation();
    setIsMenuActive(true);
  };
  const navBlurHandler = (e) => {
    setIsMenuActive(false);
  };
  const navClickHandler = (e) => {
    e.stopPropagation();
    setIsMenuActive((prevState) => !prevState);
    e.target.blur();
  };

  useEffect(() => {
    window.addEventListener("click", () => setIsMenuActive(false));
  }, []);

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.InnerHeader}>
          <HeaderMenuSetter
            toggleMenuHandler={toggleMenuHandler}
            isActive={isMenuActive}
          />
          <HeaderLogo />
          <nav
            onClick={navClickHandler}
            className={`${classes.Nav} ${isMenuActive && classes.Nav__active}`}
          >
            {links.map((link) => (
              <NavLink
                href={link.link}
                key={link.link}
                onClick={navClickHandler}
                onFocus={navFocusHandler}
                onBlur={navBlurHandler}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <div id="header-space" className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
