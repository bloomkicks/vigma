const Material = ({
  title,
  description,
  imgSrc,
  properties,
}: {
  title: string;
  description: string;
  imgSrc: string;
  properties: { title: string; text: string }[];
}) => {
  return (
    <div
      className={`rounded-2 text-left shadow-dark bg-white text-black pb-[24px] xs:w-[295px] w-[305px] shrink-0 md:w-[440px] lg:w-[975px] lg:px-[52px] lg:pt-8 lg:pb-[48px]`}
    >
      <div className="mb-1.5 lg:flex lg:flex-row lg:items-center lg:justify-start lg:mb-[40px]">
        <img
          src={imgSrc}
          alt="Изображение не найдено"
          height="220px"
          width="200px"
          className="w-full h-[220px] object-cover object-center rounded-t-2 lg:rounded-2 lg:w-[220px] lg:h-[200px] lg:mr-[10px]"
        />
        <div className="pl-[25px] pr-[25px] pt-[18px] rounded-b-2">
          <b className="text-large font-bold !font-strong block mb-1.5 lg:mb-[15px]">
            {title}
          </b>
          <p className="mb-3.5 leading-[1.5]">{description}</p>
        </div>
      </div>
      <div className="pl-[25px] pr-[25px] space-y-3.5 lg:space-y-0 lg:space-x-6 lg:flex lg:flex-row lg:items-start lg:justify-center lg:px-0">
        {properties.map((property) => (
          <div key={property.title} className="lg:w-[33.3%]">
            <b className="block font-semibold mb-1 numbers">
              {property.title}
            </b>
            <p className="body2">{property.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Material;
