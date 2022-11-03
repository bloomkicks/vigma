import Image from "next/image";
import { useState, useEffect } from "react";

import NavLink from "../ui/NavLink";
import classes from "./Header.module.scss";

const hamMenuSvg = process.env.GENERAL_ASSETS + "/ham-menu.svg";
const crossSvg = process.env.GENERAL_ASSETS + "/cross.svg";
const logo = process.env.GENERAL_ASSETS + "/header.png";

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
            style={{ color: "black" }}
            href="/main"
          >
            <Image
              height={36.5}
              width={49.5}
              src={logo}
              className={classes.Logo}
              title="На Главную"
              loading="eager"
              alt="На Главную"
            />
          </NavLink>
          {isActiveNav ? (
            <Image
              height={23}
              width={24.05}
              loading="eager"
              src={crossSvg}
              onClick={menuClickHandler}
              alt="Закрыть меню"
              className={classes.Cross}
            />
          ) : (
            <Image
              height={23}
              width={31.5}
              src={hamMenuSvg}
              onClick={menuClickHandler}
              loading="eager"
              alt="Открыть меню"
              className={classes.HamMenu}
            />
          )}
          <nav
            onClick={navClickHandler}
            className={`${classes.Nav} ${isActiveNav && classes.Nav__active}`}
          >
            <NavLink
              href="#contacts"
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
            >
              Контакты
            </NavLink>
            <NavLink
              href="/works"
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
            >
              Наши работы
            </NavLink>
            <NavLink
              href="/order"
              onClick={navClickHandler}
              onFocus={navFocusHandler}
              onBlur={navBlurHandler}
              isBlack
            >
              Рассчитать
            </NavLink>
          </nav>
        </div>
      </header>
      <div className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
