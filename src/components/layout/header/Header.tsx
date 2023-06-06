import NavMenu from "./NavMenu";
import { useState } from "react";
import Link from "next/link";
import MenuSetter from "./MenuSetter";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenuHandler() {
    setIsMenuOpen((prev) => !prev);
  }
  function closeMenuHandler() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black-light z-50 shadow-[1px_3px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto h-full max-w-[1366px] flex flex-row items-center justify-between px-8">
        <Link href="#" passHref legacyBehavior>
          <a className="p-2 pt-1.5 -translate-y-px hover:bg-gray-800 rounded-2">
            <img
              src="/images/header/logo.svg"
              alt="На главную"
              className="w-[110px] h-[35px] "
            />
          </a>
        </Link>
        <button className="p-2 -translate-y-px hover:bg-gray-800 rounded-2 ml-auto mr-[24px]">
          <img
            src="/images/header/call-us-button.svg"
            alt="Звонок"
            className="w-[31px] h-[31px]"
          />
        </button>
        <MenuSetter
          onClick={toggleMenuHandler}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <NavMenu open={isMenuOpen} />
    </header>
  );
};

export default Header;
