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
    <div className="flex flex-row justify-center items-stretch shrink-0 text-left rounded-1 shadow-normal h-[68px] md:h-[80px]">
      <div
        className={`bg-white rounded-l-1 ${
          iconSrc.includes("contract") || iconSrc.includes("package")
            ? "py-3"
            : "py-4"
        } pl-3.5 pr-3 flex justify-center items-center aspect-square h-full`}
      >
        <img
          src={iconSrc}
          alt="Фото не найдено"
          className="w-auto h-full text-[10px]"
        />
      </div>
      <div
        className={`bg-gray py-[15px] pl-4 pr-6 rounded-r-1 ${
          isLong
            ? isPackage
              ? "max-w-[230px] md:max-w-[288px]"
              : "max-w-[210px] md:max-w-[260px]"
            : "max-w-[180px] md:max-w-[225px]"
        }`}
      >
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Benefit;
