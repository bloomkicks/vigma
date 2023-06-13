const ProductTags = ({
  discount = 40,
  isHit,
}: {
  discount?: number;
  isHit?: boolean;
}) => {
  const tags = ["-" + discount + "%"];
  if (isHit) tags.unshift('ХИТ')

  return (
    <div className="flex flex-row absolute top-4 right-5 space-x-3.5 z-10 lg:top-auto lg:right-auto lg:left-[48px] lg:bottom-[20px] h-fit w-fit">
      {tags.map((tag) => (
        <div className="py-[5px] pb-[7px] px-3 bg-dark text-primary text-[0.94rem] font-semibold shadow-strong">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default ProductTags;
