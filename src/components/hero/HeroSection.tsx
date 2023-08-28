import { popupActions } from "@/store/popup-slice";
import { useDispatch } from "react-redux";
import Timer from "./Timer";
import Link from "next/link";

const HeroSection = () => {
  const dispatch = useDispatch();
  function sendRequestHandler() {
    dispatch(popupActions.togglePopup("call-consultant"));
  }

  return (
    <section
      id="hero"
      className="relative text-white py-16 z-10 px-[42px] xs:px-[38px] pr-10 overflow-x-hidden overflow-y-visible bg-[#262626] md:text-center lg:py-[110px] sm:px-24"
    >
      <img
        src="/images/hero/hero-background.jpg"
        srcSet="images/hero/hero-background-sm.jpg 375w, images/hero/hero-background.jpg 1440w"
        sizes="(max-width: 640px) 375px, 1440px"
        className="min-h-[542px] object-cover object-center -z-10 min-w-[376px] h-full w-full absolute left-1/2 bottom-0 -translate-x-1/2 bg-[#262626] xl:w-full xl:h-auto"
        alt=""
      />
      <p className="text-button-lg text-[#D1D1D1] mb-3 lg:mb-4">
        Кухни <span className="font-semibold numbers">№1</span> в
        Приморском районе
      </p>
      <h1 className="hero mb-[22px] max-w-[1014px] mx-auto lg:!text-desktop-hero lg:mb-6">
        КУХНИ НА ЗАКАЗ В СПБ ОТ ФАБРИКИ
      </h1>
      <p className="subtitle1 mb-2.5 lg:!text-desktop-subtitle1 lg:mb-4">
        Акция{" "}
        <span className="font-semibold">
          -<span className="numbers">40</span>%
        </span>{" "}
        на все кухни нашей фабрики
      </p>
      <Timer styles="mb-0 inline-block" />
      <button
        onClick={sendRequestHandler}
        className="button text-[1.16rem] mx-auto !px-[42px] !py-[11px] mb-[19px] mt-[42px] lg:!px-[78px] lg:!py-[14px] lg:mt-[48px] lg:mb-[36px]"
      >
        Оставить заявку
      </button>
      <Link href="#products" passHref legacyBehavior>
        <a className="anchor block w-fit mx-auto button-lg group">
          Посмотреть кухни
          <img
            src="/images/hero/arrow-down.svg"
            alt=""
            className="inline w-3.5 ml-2 transition-transform duration-75 lg:duration-[125ms] ease-out group-hover:translate-y-0.5 lg:w-4 lg:ml-2.5"
          />
        </a>
      </Link>
    </section>
  );
};

export default HeroSection;
