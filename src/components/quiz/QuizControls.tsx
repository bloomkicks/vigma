const QuizControls = ({
  onMoveNext,
  onMoveBack,
}: {
  onMoveNext: () => void;
  onMoveBack: () => void;
}) => {
  return (
    <div className="mt-[42px] text-black lg:mt-[48px]">
      <button
        onClick={onMoveNext}
        className="button !py-[9px] !px-8 mr-[18px] inline-block"
      >
        Далее
      </button>
      <button
        onClick={onMoveBack}
        className="button !py-[9px] !bg-gray hover:!bg-[#C6C6C6] inline-block"
      >
        Назад
      </button>
    </div>
  );
};

export default QuizControls;
