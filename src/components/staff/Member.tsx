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
    <div className="w-[220px] shrink-0 rounded-2 shadow-dark">
      <img
        src={imgSrc}
        alt="Изображение не найдено"
        className="w-full h-[210px] object-cover object-center rounded-t-2"
      />
      <div className="w-full bg-white text-black px-6 py-3.5 pb-[18px] rounded-b-2">
        <p className="font-medium mb-1">{name}</p>
        <p>{specialty}</p>
      </div>
    </div>
  );
};

export default Member;
