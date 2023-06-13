const QuizProgress = ({ curIndex }: { curIndex: number }) => {
  let index = curIndex + 1;
  if (index === 5) index = 4;
  let scalePercent = Math.ceil((index / 4) * 100);
  if (index === 1) scalePercent += 4;
  return (
    <div className="flex flex-row flex-nowrap justify-start items-center mb-8">
      <p className="shrink-0 mr-2.5 lg:mr-3.5">Вопрос {index} из 4</p>
      <div className="w-full h-[9px] rounded-[50px] bg-white translate-y-[0.5px] max-w-[325px]">
        <div
          className={`h-full bg-primary ${
            index === 4 ? "rounded-[50px]" : "rounded-l-[50px]"
          } transition-[width] duration-200 lg:duration-[250ms] ease-out`}
          style={{ width: scalePercent + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgress;
