const Slider = ({
  children,
  itemWidth,
  spacing,
  shadowSize,
  curIndex,
  styles,
  containerStyles,
  height,
  isLaptop,
  isOnly,
  isTwo,
}: {
  children: React.ReactNode;
  itemWidth: number;
  spacing: number;
  curIndex: number;
  shadowSize?: number;
  styles?: string;
  containerStyles?: string;
  height?: string;
  isLaptop?: boolean;
  isOnly?: boolean;
  isTwo?: boolean;
}) => {
  const itemTotalWidth = itemWidth + (shadowSize || 0) * 2;

  return (
    <div
      className={
        "overflow-hidden shrink-0 " + (containerStyles || "")
      }
      style={{
        width:
          isLaptop && !isOnly
            ? isTwo
              ? itemTotalWidth * 2 + spacing
              : itemTotalWidth * 3 + spacing
            : itemTotalWidth,
        paddingTop: shadowSize ? "3px" : "0",
        paddingBottom: shadowSize ? "5px" : "0",
        height: height || "",
      }}
    >
      <div
        className={`relative h-fit w-max flex flex-row justify-start items-start transition-transform duration-[400ms] lg:duration-[450ms] ease-out ${
          styles || ""
        }`}
        style={{
          transform: `translateX(-${
            (itemWidth + spacing) * curIndex
          }px) ${height ? "translateY(-50%)" : ""}`,
          top: height ? "50%" : "0",
          marginLeft: shadowSize ? shadowSize + "px" : "0",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
