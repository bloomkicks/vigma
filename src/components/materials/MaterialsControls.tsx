import SliderProgress from "../ui/SliderProgress";

const MaterialsControls = ({
  curIndex,
  length,
  moveHandler,
  isLaptop,
}: {
  curIndex: number;
  length: number;
  moveHandler: () => void;
  isLaptop?: boolean;
}) => {
  let isFar = curIndex !== 2;
  return (
    <div
      className={`pl-1.5 pr-0.5 ${
        isFar ? "-mt-[68px] lg:mt-[-20px]" : "mt-2.5 lg:mt-[36px]"
      } flex flex-row justify-between items-center transition-[margin] duration-400 ease-out z-10 relative lg:justify-center`}
    >
      <SliderProgress
        curIndex={curIndex}
        length={length}
        isLaptop={isLaptop}
        styles="mt-2.5 mr-[80px] lg:mr-[172px]"
        isDark
        isOnly
      />
      <button
        onClick={moveHandler}
        className="px-[13px] py-[9px] group bg-dark-lightened rounded-1"
      >
        <img
          src="/images/materials/gold-long-arrow-right.svg"
          alt=""
          className="w-[60px] h-auto group-hover:translate-x-0.5 transition-transform duration-75 lg:duration-[125ms] ease-out lg:scale-110"
        />
      </button>
    </div>
  );
};

export default MaterialsControls;
