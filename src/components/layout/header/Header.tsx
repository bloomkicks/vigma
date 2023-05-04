import MenuSocials from "./MenuSocials";
import { useState, useEffect } from "react";

import MenuCallButton from "./MenuCallButton";
import HeaderMenuSetter from "./HeaderMenuSetter";
import HeaderLogo from "./HeaderLogo";
import NavLink from "./NavLink";
import classes from "./Header.module.scss";

let links = [
  {
    link: "/main#contacts",
    onAnchorClick: () => {
      const contactsSection = document.getElementById("contacts");
      if (contactsSection.scrollTo) {
        contactsSection.scrollTo({ behavior: "smooth", top: 3, left: 0 });
      } else {
        contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    title: "Контакты",
  },
  {
    link: "/main#quiz",
    onAnchorClick: () => {
      const quizSection = document.getElementById("quiz");
      if (quizSection.scrollTo) {
        quizSection.scrollTo({ behavior: "smooth", top: 12, left: 0 });
      } else {
        quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    title: "Рассчитать | Заказать",
  },
  {
    link: "/catalog",
    title: "Наши кухни",
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
          <MenuCallButton />
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
