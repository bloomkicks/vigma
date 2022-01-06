import {useState} from 'react'

import hamMenuSvg from "../../assets/ham-menu.svg";
import blueLogo from "../../assets/logos/vigma_logo_blue.svg";
import Link from "../ui/Link";
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
          <Link
            innerClassName={classes.LogoInnerContainer}
            className={classes.LogoContainer}
            href="/main"
          >
            <img src={blueLogo} className={classes.Logo} />
          </Link>
          <img
            src={hamMenuSvg}
            onClick={menuClickHandler}
            alt="Открыть меню"
            className={classes.HamMenu}
          />
          <nav className={`${classes.Nav} ${isActiveNav && classes.Nav__active}`}>
            <Link href="/order">Заказать</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="/about-us">О нас</Link>
            <Link href="/reviews">Отзывы</Link>
            <Link href="/works">Наши<br /> работы</Link>
          </nav>
        </div>
      </header>
      <div className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
