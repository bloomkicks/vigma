const Benefit = ({
  iconSrc,
  text,
}: {
  iconSrc: string;
  text: string;
}) => {
  const isLong =
    !iconSrc.includes("date") && !iconSrc.includes("shape");
  const isPackage = iconSrc.includes("package");

  return (
    <div className="flex flex-row justify-center items-stretch shrink-0 text-white rounded-1.5 shadow-normal h-[68px]">
      <div className="bg-black rounded-l-1.5 py-3.5 pl-3 pr-2.5 flex justify-center items-center aspect-square h-full">
        <img
          src={iconSrc}
          alt="Фото не найдено"
          className="w-auto h-full text-[10px]"
        />
      </div>
      <div
        className={`bg-[#303030] py-[15px] pl-4 pr-6 rounded-r-1.5 ${
          isLong
            ? isPackage
              ? "max-w-[220px]"
              : "max-w-[200px]"
            : "max-w-[180px]"
        }`}
      >
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Benefit;
