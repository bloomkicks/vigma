import { useState } from "react";

const availableColors = [
  "#0A1012",
  "#8A0202",
  "#1449A0",
  "#20752D",
  "#DEDEDE",
];

const ConstructorSection = () => {
  const [color, setColor] = useState("#0A1012");

  function selectColorHandler(clr: string) {
    return () => setColor(clr);
  }

  return (
    <section className="section-light lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
      <div className="text-left lg:ml-12 lg:mb-6">
        <h2 className="heading mb-2.5 lg:mb-5">
          Цвета и текстуры на любой вкус
        </h2>
        <p className="leading-[1.5] mb-5 lg:mb-10">
          С нами вы можете выбрать любые материалы и цвета для вашей кухни
        </p>
        <div className="flex-row justify-center items-center space-x-5 hidden lg:flex">
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
      <div className="mb-[30px] relative aspect-[1.323] shadow-normal w-auto h-auto">
        <div
          className="w-full h-full transition-colors duration-100 lg:duration-150 ease-out absolute top-0 left-0"
          style={{ backgroundColor: color }}
        ></div>
        <img
          src="/images/constructor/kitchen-display.png"
          alt="Изображение не найдено"
          className="relative z-10 w-[305px] h-[230.5px] lg:h-[325px] lg:w-[594px] object-cover object-center"
        />
      </div>
      <div className="flex flex-row justify-center items-center space-x-5 lg:hidden">
        {availableColors.map((clr) => (
          <div
            onClick={selectColorHandler(clr)}
            className={
              "w-[38px] h-[38px] rounded-[100px] shadow-strong transition-[border-width] duration-[50ms] lg:duration-100 ease-out border-primary " +
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

export default ConstructorSection;
