import MenuSocials from "./MenuSocials";
import { useState, useEffect } from "react";

import CallButton from "./CallButton";
import HeaderMenuSetter from "./HeaderMenuSetter";
import HeaderLogo from "./HeaderLogo";
import NavLink from "./NavLink";
import classes from "./Header.module.scss";

let links = [
  {
    link: "/main#contacts-start",
    onAnchorClick: () => {
      const contactsDivider = document.getElementById("contacts-start");
      contactsDivider.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    title: "Контакты",
  },
  {
    link: "/main#quiz-start",
    onAnchorClick: () => {
      const quizDivider = document.getElementById("quiz-start");
      quizDivider.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    title: "Расчёт Стоимости",
  },
  {
    link: "/catalog",
    title: "Каталог",
  },
];

const Header = () => {
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
          <HeaderLogo />
          <nav
            onClick={navClickHandler}
            className={`${classes.Nav} ${isMenuActive && classes.Nav__active}`}
          >
            {links.map((link) => (
              <NavLink href={link.link} key={link.link}>
                {link.title}
              </NavLink>
            ))}
            <MenuSocials />
          </nav>
          <CallButton />
          <HeaderMenuSetter
            toggleMenuHandler={toggleMenuHandler}
            isActive={isMenuActive}
          />
        </div>
      </header>
      <div id="header-space" className={classes.HeaderSpace}></div>
    </>
  );
};

export default Header;
