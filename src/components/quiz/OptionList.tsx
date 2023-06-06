const OptionList = ({
  options,
}: {
  options: {
    imgName: string;
    title: string;
  }[];
}) => {
  return (
    <div className="flex flex-row flex-wrap mr-[-18px] mb-[-20px] mt-8">
      {options.map((option) => (
        <div className="w-[42.5%] max-w-[140px] mr-[18px] mb-[20px] rounded-1 shadow-dark">
          <img
            src={`/images/quiz/${option.imgName}`}
            alt="Изображение не найдено"
            className="w-full h-[80px] rounded-t-1"
          />
          <div className="px-[13px] py-[8.5px] rounded-b-1 bg-white text-black">
            <span className="inline-block border-black border-[1px] w-3.5 h-3.5 aspect-square rounded-[20px] align-middle"></span>
            <p className="ml-1.5 inline-block align-middle">
              {option.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionList;
