const Slider = ({
  children,
  itemWidth,
  spacing,
  shadowSize,
  curIndex,
  styles,
}: {
  children: React.ReactNode;
  itemWidth: number;
  spacing: number;
  curIndex: number;
  shadowSize?: number;
  styles?: string;
}) => {
  const itemTotalWidth = itemWidth + (shadowSize || 0) * 2;

  return (
    <div
      className={`overflow-x-hidden shrink-0`}
      style={{ width: itemTotalWidth }}
    >
      <div
        className={`h-full w-max flex flex-row justify-start items-start transition-transform duration-[400ms] ease-out ${
          styles || ""
        }`}
        style={{
          transform: `translateX(-${
            (itemTotalWidth - (shadowSize || 0) * 2 + spacing) *
            curIndex
          }px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
