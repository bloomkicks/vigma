import Timer from "./Timer";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative text-white py-16 z-10 px-11 overflow-x-hidden overflow-y-visible">
      <img
        src="/images/hero/hero-illustration.jpg"
        alt=""
        className="min-h-[542px] -z-10 min-w-[376px] h-full w-auto absolute left-1/2 bottom-0 -translate-x-1/2 bg-[#262626]"
      />
      <p className="font-strong font-[18px] text-[#D1D1D1] mb-4">
        Кухни <span className="font-semibold">№1</span> в Приморском
        районе
      </p>
      <h1 className="hero mb-4">НАДЁЖНЫЕ КУХНИ НА ЗАКАЗ В СПБ</h1>
      <p className="subtitle1 mb-[9px]">
        Акция <span className="font-semibold">-40%</span> на все кухни
        нашей фабрики
      </p>
      <Timer />
      <button className="bg-primary text-black text-[1.16rem] mx-auto rounded-2 px-[42px] py-[11px] mb-[19px] mt-[39px]">
        Оставить заявку
      </button>
      <Link href="#" passHref legacyBehavior>
        <a className="block w-fit mx-auto button-lg group">
          Посмотреть кухни
          <img
            src="/images/hero/arrow-down.svg"
            alt=""
            className="inline ml-2 transition-transform duration-75 ease-out group-hover:translate-y-0.5"
          />
        </a>
      </Link>
    </section>
  );
};

export default HeroSection;
