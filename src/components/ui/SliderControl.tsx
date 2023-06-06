const SliderControl = ({
  onClick,
  isLeft,
  isDark,
  isSmall,
}: {
  onClick: () => void;
  isLeft?: boolean;
  isDark?: boolean;
  isSmall?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-6 bg-transparent flex items-center justify-center rounded-1 shrink-0 ${
        isLeft ? "pr-2" : "pl-2"
      } ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-300"}`}
      style={{
        marginLeft: isLeft || isSmall ? 0 : "3px",
        marginRight: isLeft && !isSmall ? "3px" : 0,
      }}
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
