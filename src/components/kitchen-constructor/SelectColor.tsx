const SelectColor = ({
  colors,
  curColor,
  onSelect,
  isMobile
}: {
  colors: string[];
  curColor: string;
  onSelect: (str: string) => void;
  isMobile?: boolean
}) => {
  function selectHandler(clr: string) {
    return () => {
      onSelect(clr);
    };
  }

  return (
    <div className={`flex-row justify-center items-center space-x-5 ${isMobile ? "flex md:hidden" : "hidden md:flex"}`}>
      {colors.map((color) => (
        <button
          key={color}
          className={
            "w-[38px] h-[38px] p-0 rounded-[100px] shadow-strong transition-[border-width] duration-[50ms] md:duration-100 ease-out border-primary border-[2px] focus:outline-none " +
            (color === curColor ? "border-solid" : "border-none")
          }
          onClick={selectHandler(color)}
          onFocus={selectHandler(color)}
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  );
};

export default SelectColor;
