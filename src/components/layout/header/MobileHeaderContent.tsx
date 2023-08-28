import { modalActions } from "@/store/popup-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MenuSetter from "./MenuSetter";
import NavMenu from "./NavMenu";

const MobileHeaderContent = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenuHandler() {
    setIsMenuOpen((prev) => !prev);
  }
  function callHandler() {
    dispatch(modalActions.toggleModal("call-consultant"));
  }

  return (
    <>
      <button
        onClick={callHandler}
        className="transition-colors duration-150 lg:duration-200 p-2 -translate-y-px hover:bg-dark-lightened rounded-1 ml-auto mr-[16px] md:mr-[24px] lg:hidden"
      >
        <img
          src="/images/header/call-us-button.svg"
          alt="Звонок"
          className="w-[31px] h-[31px]"
        />
      </button>
      <MenuSetter
        isMenuOpen={isMenuOpen}
        onClick={toggleMenuHandler}
      />
      <NavMenu open={isMenuOpen} onClick={toggleMenuHandler} />
    </>
  );
};

export default MobileHeaderContent;
