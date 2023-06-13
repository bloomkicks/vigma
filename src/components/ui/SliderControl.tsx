const SliderControl = ({
  onClick,
  isLeft,
  isDark,
  isSmall,
  styles,
  imgStyles,
  isProduct,
}: {
  onClick: () => void;
  isLeft?: boolean;
  isDark?: boolean;
  isSmall?: boolean;
  styles?: string;
  imgStyles?: string;
  isProduct?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 xs:px-[9px] py-6 bg-transparent flex items-center justify-center rounded-1 shrink-0 transition-colors duration-150 lg:duration-200 ease-out lg:px-3.5 ${
        isDark ? "hover:bg-dark-lightened" : "hover:bg-gray"
      } ${
        !isLeft
          ? isSmall
            ? "ml-px lg:ml-[68px]"
            : "ml-2 lg:ml-[68px]"
          : isSmall
          ? "mr-px lg:mr-[68px]"
          : "mr-2 lg:mr-[68px]"
      } ${
        isProduct
          ? "absolute top-1/2 -translate-y-1/2 !bg-gray hover:!bg-gray-dark !py-3.5 z-10 shadow-normal lg:translate-x-0 bg-opacity-80 lg:!px-3 "
          : ""
      } ${
        isProduct
          ? isLeft
            ? "left-0 -translate-x-1/2 lg:rounded-l-0"
            : "right-0 translate-x-1/2 lg:rounded-r-0"
          : ""
      } ${styles || ""}`}
    >
      <img
        src={`/images/general/${isDark ? "dark-" : ""}arrow-${
          isLeft ? "left" : "right"
        }.svg`}
        alt={isLeft ? "Назад" : "Вперед"}
        className={"w-4 h-auto xs:w-[14px] lg:w-[18px] " + (imgStyles || "")}
      />
    </button>
  );
};

export default SliderControl;
