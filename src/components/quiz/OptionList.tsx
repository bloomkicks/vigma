import { useState } from "react";

const OptionList = ({
  options,
  onSelect,
  selectedOptions,
  question,
}: {
  options: {
    imgName: string;
    title: string;
  }[];
  onSelect: (id: string) => void;
  selectedOptions: string[];
  question: string;
}) => {
  const [focused, setFocused] = useState<string>();

  return (
    <div className="flex flex-row flex-wrap mb-[-20px] mr-[-25px]">
      {options.map((option) => (
        <label
          className="w-[45%] xs:w-[44%] max-w-[155px] text-left mr-[16px] mb-[22px] rounded-1 shadow-dark fade-out-hover hover:!opacity-[0.92] animate-[slide-in_500ms_ease-out] cursor-pointer lg:max-w-[190px]"
          key={option.title}
          htmlFor={option.title}
        >
          <img
            src={`/images/quiz/${question}/${option.imgName}`}
            alt="Изображение не найдено"
            width="190px"
            height="120px"
            className="w-full h-[80px] rounded-t-1 block object-cover object-center lg:h-[120px]"
          />
          <div
            className={
              "flex flex-row items-center pl-3 pr-0.5 py-2 rounded-b-1 bg-white text-black transform-[border] duration-[25ms] ease-out lg:pr-3 lg:py-3 " +
              (selectedOptions.includes(option.title)
                ? "border-t-[2px] border-primary-dark"
                : "")
            }
          >
            <div
              className={`border-black border-[1px] w-[13px] h-[13px] aspect-square rounded-[1px] lg:w-[15px] lg:h-[15px] ${
                option.title === focused
                  ? "[outline:2px_solid_lightblue]"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                name={question}
                value={option.title}
                id={option.title}
                tabIndex={0}
                checked={selectedOptions.includes(option.title)}
                onFocus={() => setFocused(option.title)}
                onBlur={() => setFocused("")}
                onChange={() => onSelect(option.title)}
                className="opacity-0 absolute"
              />
              <div
                className={
                  "w-full h-full rounded-[1px] border-[2px] border-white transition-colors ease-out duration-200 " +
                  (selectedOptions.includes(option.title)
                    ? "bg-primary-dark"
                    : "bg-transparent")
                }
              ></div>
            </div>
            <p className="ml-[7px] text-[0.9rem] -translate-y-px lg:ml-2">
              {option.title}
            </p>
          </div>
        </label>
      ))}
    </div>
  );
};

export default OptionList;
