const SliderProgress = ({
  length,
  curIndex,
  styles,
  isDark,
  isLaptop,
  isOnly,
  isTwo,
}: {
  length: number;
  curIndex: number;
  styles?: string;
  isDark?: boolean;
  isLaptop?: boolean;
  isOnly?: boolean;
  isTwo?: boolean;
}) => {
  const parts = new Array(length).fill(null).map((n, i) => i);

  return (
    <div
      className={"flex flex-row space-x-1.5 !lg:space-x-2.5 " + (styles || "")}
    >
      {parts.map((i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-[100px] transition-colors duration-150 ease-out lg:w-3 lg:h-3 ${
            isDark ? "border-white" : "border-black"
          } border-[1px] ${
            (
              isLaptop && !isOnly
                ? i >= curIndex && i <= curIndex + (isTwo ? 1 : 2)
                : i === curIndex
            )
              ? "bg-primary"
              : "bg-transparent"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SliderProgress;
