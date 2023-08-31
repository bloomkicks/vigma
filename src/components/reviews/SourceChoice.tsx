const SourceChoice = ({
  onMessagesClick,
  onProfiClick,
  isProfiActive,
}: {
  onMessagesClick: () => void;
  onProfiClick: () => void;
  isProfiActive?: boolean;
}) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        onClick={onMessagesClick}
        className={
          "py-[9px] lg:py-[11px] pl-[18px] pr-3 rounded-l-1 transition-colors duration-150 lg:duration-200 ease-out " +
          (isProfiActive ? "bg-gray hover:bg-gray-dark" : "bg-[#D2D2D2]")
        }
      >
        Сообщения
      </button>
      <button
        onClick={onProfiClick}
        className={
          "py-[9px] lg:py-[11px] pl-3.5 pr-[18px] rounded-r-1 transition-colors duration-150 lg:duration-200 ease-out " +
          (isProfiActive ? "bg-[#D2D2D2]" : "bg-gray hover:bg-gray-dark")
        }
      >
        Профи.ру
      </button>
    </div>
  );
};

export default SourceChoice;
