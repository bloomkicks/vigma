import { useState } from "react";

import SelectColor from "./SelectColor";

const availableColors = [
  "#0A1012",
  "#8A0202",
  "#1449A0",
  "#20752D",
  "#DEDEDE",
];

const KitchenConstructorSection = () => {
  const [curColor, setCurColor] = useState("#0A1012");

  function selectColorHandler(clr: string) {
    setCurColor(clr);
  }

  return (
    <section className="section-light md:flex md:flex-row-reverse md:justify-center md:items-center">
      <div className="text-left md:ml-12 md:mb-6">
        <h2 className="heading mb-2.5 lg:mb-5">
          Цвета и текстуры на любой вкус
        </h2>
        <p className="leading-[1.5] mb-5 md:mb-10">
          С нами вы можете выбрать любые материалы и цвета для вашей
          кухни
        </p>
        <SelectColor
          colors={availableColors}
          curColor={curColor}
          onSelect={selectColorHandler}
        />
      </div>
      <div className="mb-[30px] relative aspect-[1.323] shadow-normal mx-auto w-fit h-fit md:mx-0 md:w-fit">
        <div
          className="w-[305px] h-[230.5px] md:h-[325px] md:w-[594px] max-w-full max-h-full transition-colors duration-100 md:duration-150 ease-out absolute top-0 left-0"
          style={{ backgroundColor: curColor }}
        ></div>
        <img
          src="/images/constructor/kitchen-display.png"
          alt="Изображение не найдено"
          loading="lazy"
          width="594px"
          height="325px"
          className="relative z-10 w-[305px] h-[230.5px] md:h-[325px] md:w-[594px] object-cover object-center"
        />
      </div>
      <SelectColor
        colors={availableColors}
        curColor={curColor}
        onSelect={selectColorHandler}
        isMobile
      />
    </section>
  );
};

export default KitchenConstructorSection;
