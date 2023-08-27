import { useState } from "react";

const availableColors = [
  "#0A1012",
  "#8A0202",
  "#1449A0",
  "#20752D",
  "#DEDEDE",
];

const KitchenConstructorSection = () => {
  const [color, setColor] = useState("#0A1012");

  function selectColorHandler(clr: string) {
    return () => setColor(clr);
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
        <div className="flex-row justify-center items-center space-x-5 hidden md:flex">
          {availableColors.map((clr) => (
            <div
              onClick={selectColorHandler(clr)}
              className={
                "w-[38px] h-[38px] rounded-[100px] shadow-strong transition-[border-width] duration-[50ms] ease-out border-primary " +
                (clr === color ? "border-[2px]" : "")
              }
              style={{ backgroundColor: clr }}
              key={clr}
            ></div>
          ))}
        </div>
      </div>
      <div className="mb-[30px] relative aspect-[1.323] shadow-normal w-auto h-auto md:w-fit">
        <div
          className="w-[305px] h-[230.5px] md:h-[325px] md:w-[594px] max-w-full max-h-full transition-colors duration-100 md:duration-150 ease-out absolute top-0 left-0"
          style={{ backgroundColor: color }}
        ></div>
        <img
          src="/images/constructor/kitchen-display.png"
          alt="Изображение не найдено"
          width="594px"
          height="325px"
          className="relative z-10 w-[305px] h-[230.5px] md:h-[325px] md:w-[594px] object-cover object-center"
        />
      </div>
      <div className="flex flex-row justify-center items-center space-x-5 md:hidden">
        {availableColors.map((clr) => (
          <div
            onClick={selectColorHandler(clr)}
            className={
              "w-[38px] h-[38px] rounded-[100px] shadow-strong transition-[border-width] duration-[50ms] md:duration-100 ease-out border-primary " +
              (clr === color ? "border-[2px]" : "")
            }
            style={{ backgroundColor: clr }}
            key={clr}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default KitchenConstructorSection;
