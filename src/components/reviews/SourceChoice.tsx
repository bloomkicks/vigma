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
          "py-[9px] pl-4 pr-3 rounded-l-2.5 " +
          (isProfiActive ? "bg-[#DDDDDD]" : "bg-[#D4D4D4]")
        }
      >
        Сообщения
      </button>
      <button
        onClick={onProfiClick}
        className={
          "py-[9px] pl-3.5 pr-4 rounded-r-2.5 " +
          (isProfiActive ? "bg-[#D4D4D4]" : "bg-[#DDDDDD]")
        }
      >
        Профи.ру
      </button>
    </div>
  );
};

export default SourceChoice;
