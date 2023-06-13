const Member = ({
  name,
  specialty,
  imgSrc,
}: {
  name: string;
  specialty: string;
  imgSrc: string;
}) => {
  return (
    <div className="w-[226px] shrink-0 rounded-1 shadow-dark px-1.5 pt-[5px] bg-gray-dark lg:w-[255px] text-left">
      <img
        src={imgSrc}
        alt="Изображение не найдено"
        className="w-full h-[267px] object-cover object-center lg:h-[300px]"
      />
      <div className="w-[calc(100%+12px)] -ml-1.5 bg-white text-black px-5 py-3.5 pb-5 rounded-b-1">
        <p className="font-semibold mb-1.5">{name}</p>
        <p>{specialty}</p>
      </div>
    </div>
  );
};

export default Member;
