import { quizActions } from "@/store/quiz-slice";
import { useDispatch } from "react-redux";
const directions = ["width", "height", "depth"];
const translations = {
  width: "Ширина",
  height: "Высота",
  depth: "Глубина",
};

const SizeForm = ({
  sizes,
}: {
  sizes: { width: string; height: string; depth: string };
}) => {
  const dispatch = useDispatch();

  function changeSizeHandler(direction: string) {
    let timeout: NodeJS.Timeout | string = "";
    return (e: any) => {
      clearTimeout(timeout);
      let value = e.target.value;
      timeout = setTimeout(() => {
        dispatch(
          quizActions.setSize({
            direction,
            value,
          }),
        );
      }, 1000);
    };
  }

  return (
    <div className="text-left relative md:flex md:flex-row-reverse md:justify-end md:items-center">
      <img
        src="/images/quiz/size-illustration.png"
        alt=""
        className="w-full max-w-[250px] mb-4 md:mb-0 md:w-[280px] h-auto shrink-0 md:ml-[56px]"
      />
      <div className="flex flex-col justify-start items-start space-y-4 animate-[slide-in_500ms_ease-out] md:space-y-5">
        {directions.map((direction) => (
          <div key={direction}>
            <label htmlFor={direction} className="block mb-1.5">
              {translations[direction as keyof typeof translations]}{" "}
              <span
                className={
                  direction === "height"
                    ? "text-[#0862E8]"
                    : direction === "width"
                    ? "text-[#E94410]"
                    : "text-[#07BC24]"
                }
              >
                (см)
              </span>
            </label>
            <input
              type="number"
              id={direction}
              placeholder="100"
              defaultValue={sizes[direction as keyof typeof sizes]}
              min="1"
              onChange={changeSizeHandler(direction)}
              max="1000"
              step="10"
              className="max-w-full w-[240px] placeholder:text-[rgba(255,255,255,0.7)] numbers border-[rgba(255,255,255,0.7)] bg-dark-lightened bg-opacity-75 text-white md:w-[400px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeForm;
