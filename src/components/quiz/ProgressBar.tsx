const ProgressBar = ({ curIndex }: { curIndex: number }) => {
  let index = curIndex + 1;
  let scalePercent = Math.ceil(index / 5 * 100) + 4;
  if (scalePercent > 80) scalePercent -= 4;
  return (
    <div className="flex flex-row flex-nowrap justify-start items-center">
      <p className="shrink-0 mr-2.5">Вопрос {index} из 5</p>
      <div className="w-full h-[9px] rounded-1.5 bg-white translate-y-[0.5px]">
        <div
          className="h-full bg-primary rounded-l-1.5"
          style={{ width: scalePercent + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
