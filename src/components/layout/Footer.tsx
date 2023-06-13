import { useDispatch } from "react-redux";
import { popupActions } from "@/store/popup-slice";
import Link from "next/link";
import Timer from "../hero/Timer";
import NavLinks from "./header/NavLinks";

const Footer = () => {
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(popupActions.togglePopup("call-consultant"));
  }

  return (
    <footer className="section-dark !px-[50px] !pb-[74px] relative lg:flex lg:flex-row-reverse lg:justify-center lg:items-start lg:space-x-[52px] lg:!pb-[160px]">
      <img
        src="/images/header/small-logo.svg"
        alt=""
        className="w-auto h-10 absolute top-8 right-[50px] lg:h-[52px] lg:right-[140px] lg:top-10"
      />
      <NavLinks styles="!text-[1.25rem]" />
      <div className="mt-9 lg:mt-2 lg:max-w-[40%]">
        <div className="mb-2 text-left lg:mb-3">
          <p className="text-button-lg inline-block mr-[14px]">
            Акция <span className="font-semibold">-40%</span>
          </p>
          <Timer styles="inline-block bg-[#1D2325] scale-85" />
        </div>
        <p className="text-button-lg text-left">
          Узнайте больше по телефону:{" "}
          <Link href="tel:+7(964)642-60-51" passHref legacyBehavior>
            <a className="numbers block mt-2">+7 (964) 642-60-51</a>
          </Link>
        </p>
        <button
          onClick={clickHandler}
          className="button button-primary mb-[46px] mt-[26px] lg:mt-[30px]"
        >
          Заказать звонок
        </button>
      </div>
      <Link href="/privacy" passHref legacyBehavior>
        <a className="block text-[0.875rem] absolute left-[50px] lg:left-1/2 bottom-[60px] lg:bottom-[76px] lg:-translate-x-1/2">
          Наша политика конфиденциальности
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
