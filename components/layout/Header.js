import {useState} from 'react'

const hamMenuSvg = "/ham-menu.svg";
const blueLogo = "/logos/vigma_logo_blue.svg";
import NavLink from "../ui/NavLink";
import classes from "./Header.module.css";

const Header = (props) => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const menuClickHandler = (e) => {
    setIsActiveNav((prevState) => !prevState);
  };

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.InnerHeader}>
          <NavLink
            innerClassName={classes.LogoInnerContainer}
            className={classes.LogoContainer}
            href="/main"
          >
            <img src={blueLogo} className={classes.Logo} />
          </NavLink>
          <img
            src={hamMenuSvg}
            onClick={menuClickHandler}
            alt="Открыть меню"
            className={classes.HamMenu}
          />
          <nav className={`${classes.Nav} ${isActiveNav && classes.Nav__active}`}>
            <NavLink href="/order/quiz">Заказать</NavLink>
            <NavLink href="/contacts">Контакты</NavLink>
            <NavLink href="/about-us">О нас</NavLink>
            <NavLink href="/reviews">Отзывы</NavLink>
            <NavLink href="/works">Наши<br /> работы</NavLink>
          </nav>
        </div>
      </header>
      <div className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
