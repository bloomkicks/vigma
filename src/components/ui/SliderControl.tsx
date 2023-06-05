const SliderControl = ({
  onClick,
  isLeft,
  isDark,
}: {
  onClick: () => void;
  isLeft?: boolean;
  isDark?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-6 bg-transparent hover:bg-gray-300 flex items-center justify-center rounded-1 shrink-0 ${
        isLeft ? "pr-2" : "pl-2"
      }`}
      // style={{
      //   marginLeft: isLeft ? 0 : "2px",
      //   marginRight: isLeft ? "2px" : 0,
      // }}
    >
      <img
        src={`/images/general/${isDark ? "dark-" : ""}arrow-${
          isLeft ? "left" : "right"
        }.svg`}
        alt={isLeft ? "Назад" : "Вперед"}
        className="w-full min-w-[16px] max-w-[18px] h-auto"
      />
    </button>
  );
};

export default SliderControl;
