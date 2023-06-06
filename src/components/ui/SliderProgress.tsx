const SliderProgress = ({
  length,
  curIndex,
  styles,
}: {
  length: number;
  curIndex: number;
  styles?: string;
}) => {
  const parts = new Array(length).fill(null).map((n, i) => i);

  return (
    <div className={"flex flex-row space-x-1.5 " + (styles || "")}>
      {parts.map((i) => (
        <div
          className={
            "w-2.5 h-2.5 rounded-4.5 border-black border-[1px] " +
            (i === curIndex ? "bg-primary" : "bg-transparent")
          }
        ></div>
      ))}
    </div>
  );
};

export default SliderProgress;
