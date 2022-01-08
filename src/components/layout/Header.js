import { useState, useEffect } from "react";

import NavLink from "../ui/NavLink";
import classes from "./Header.module.css";

const hamMenuSvg = "/ham-menu.svg";
const blueLogo = "/logos/vigma_logo_blue.svg";

const Header = (props) => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const menuClickHandler = (e) => {
    e.stopPropagation();
    setIsActiveNav((prevState) => !prevState);
  };
  const menuBlurHandler = (e) => {
    setIsActiveNav(false);
  };
  const navClickHandler = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    window.addEventListener("click", menuBlurHandler);
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
            tabIndex={1}
            className={`${classes.Nav} ${isActiveNav && classes.Nav__active}`}
          >
            <NavLink href="/order/quiz">Заказать</NavLink>
            <NavLink href="/contacts">Контакты</NavLink>
            <NavLink href="/about-us">О нас</NavLink>
            <NavLink href="/reviews">Отзывы</NavLink>
            <NavLink href="/works">
              Наши
              <br /> работы
            </NavLink>
          </nav>
        </div>
      </header>
      <div className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
