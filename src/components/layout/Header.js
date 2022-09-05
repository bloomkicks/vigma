import { useState, useEffect } from "react";

import NavLink from "../ui/NavLink";
import classes from "./Header.module.scss";

const hamMenuSvg = process.env.GENERAL_ASSETS + "/ham-menu.svg";
const crossSvg = process.env.GENERAL_ASSETS + "/cross.svg";
const blueLogo = process.env.LOGOS_ASSETS + "/header_new.png";

const Header = (props) => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const menuClickHandler = (e) => {
    e.stopPropagation();
    setIsActiveNav((prevState) => {
      if (prevState) {
        e.target.blur();
      }
      return !prevState;
    });
  };
  const navFocusHandler = (e) => {
    e.stopPropagation();
    setIsActiveNav(true);
  };
  const navBlurHandler = (e) => {
    setIsActiveNav(false);
  };
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
            tabIndex={1}
            style={{ color: "black" }}
            href="/main"
          >
            <img
              src={blueLogo}
              className={classes.Logo}
              title="На Главную"
              alt="На Главную"
            />
          </NavLink>
          {isActiveNav ? (
            <img
              src={crossSvg}
              onClick={menuClickHandler}
              alt="Закрыть меню"
              className={classes.Cross}
            />
          ) : (
            <img
              src={hamMenuSvg}
              onClick={menuClickHandler}
              alt="Открыть меню"
              className={classes.HamMenu}
            />
          )}
          <nav
            onClick={navClickHandler}
            className={`${classes.Nav} ${isActiveNav && classes.Nav__active}`}
          >
            <NavLink
              href="/order"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
            >
              Рассчитать
            </NavLink>
            <NavLink
              href="/contacts"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
            >
              Контакты
            </NavLink>
            <NavLink
              href="/works"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
            >
              Наши работы
            </NavLink>
            <NavLink
              href="/about-us"
              tabIndex={1}
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
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
