import blueLogo from "../../assets/logos/vigma_logo_blue.svg";
import Link from "../ui/Link";
import classes from "./Header.module.css";

const Header = (props) => {
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
        <nav className={classes.Nav}>
          <Link href="/order">Заказать</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/about-us">О нас</Link>
          <Link href="/reviews">Отзывы</Link>
          <Link href="/works">Наши работы</Link>
        </nav>
      </div>
    </header>
    <div className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
