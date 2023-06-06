const Material = ({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <div className="text-center rounded-2.5 shadow-dark w-[250px] shrink-0 translate-x-1">
      <img
        src={imgSrc}
        alt="Изображение не найдено"
        className="w-full h-[160px] object-cover object-center rounded-t-2.5"
      />
      <div className="px-5 pt-4 pb-[26px] rounded-b-2.5 bg-white text-black">
        <b className="large block mb-1.5">{title}</b>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Material;
