const Category = ({
  title,
  imgSrc,
}: {
  title: string;
  imgSrc: string;
}) => {
  return (
    <div className="w-[185px] shrink-0">
      <img
        src={imgSrc}
        alt="Изображение не найдено"
        className="w-full h-[110px] object-cover object-center text-center rounded-t-1"
      />
      <div className="px-4 pr-4.5 py-2.5 bg-white text-black rounded-b-1 shadow-dark">
        <span className="button-lg align-middle">{title}</span>
        <img
          src="/images/general/long-arrow-right.svg"
          alt=""
          className="inline ml-2 w-[17.25px] h-auto algin-middle"
        />
      </div>
    </div>
  );
};

export default Category;
