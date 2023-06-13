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
    <div className="text-center w-[245px] shrink-0 lg:w-[380px]">
      <img
        src={iconSrc}
        alt=""
        width="100px"
        height="100px"
        className="w-[80px] h-auto aspect-square mx-auto mb-2 lg:w-[100px]"
      />
      <b className="subtitle1 block mb-2.5 lg:!text-desktop-large">
        {title}
      </b>
      <p className="leading-[1.5]">{description}</p>
    </div>
  );
};

export default Service;
