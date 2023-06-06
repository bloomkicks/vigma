const Service = ({
  title,
  description,
  iconSrc,
}: {
  title: string;
  description: string;
  iconSrc: string;
}) => {
  return (
    <div className="text-center w-[245px] shrink-0">
      <img
        src={iconSrc}
        alt=""
        className="w-[70px] aspect-square mx-auto mb-2"
      />
      <b className="subtitle1 block mb-[9px]">{title}</b>
      <p>{description}</p>
    </div>
  );
};

export default Service;
