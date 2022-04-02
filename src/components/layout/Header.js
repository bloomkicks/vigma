import { useState, useEffect } from "react";

import NavLink from "../ui/NavLink";
import classes from "./Header.module.css";

const hamMenuSvg = "/ham-menu.svg";
const blueLogo = "/logos/logo_new.svg";

const Header = (props) => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const menuClickHandler = (e) => {
    e.stopPropagation();
    setIsActiveNav((prevState) => {
      if (prevState) {
        e.target.blur()
      }
      return !prevState
    });
  };
  const navFocusHandler = (e) => {
    e.stopPropagation()
    setIsActiveNav(true);
  };
  const navBlurHandler = e => {
    setIsActiveNav(false)
  }
  const navClickHandler = (e) => {
    e.stopPropagation();
    setIsActiveNav((prevState) => !prevState);
    e.target.blur();
  };
  useEffect(() => {
    window.addEventListener("click", () => setIsActiveNav(false));
  }, []);

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.InnerHeader}>
          <NavLink
            innerClassName={classes.LogoInnerContainer}
            className={classes.LogoContainer}
            href="/main"
          >
            <img src={blueLogo} className={classes.Logo} tabIndex={1} />
          </NavLink>
          <img
            src={hamMenuSvg}
            onClick={menuClickHandler}
            alt="Открыть меню"
            tabIndex={1}
            className={classes.HamMenu}
          />
          <nav
            onClick={navClickHandler}
            className={`${classes.Nav} ${isActiveNav && classes.Nav__active}`}
          >
            <NavLink
              href="/order/quiz"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
            >
              Заказать
            </NavLink>
            <NavLink
              href="/contacts"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
            >
              Контакты
            </NavLink>
            <NavLink
              href="/works"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
            >
              Наши
              <br /> работы
            </NavLink>
            <NavLink
              href="/about-us"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
            >
              О нас
            </NavLink>
          </nav>
        </div>
      </header>
      <div className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
