const ProductKitchenSlices = ({
  slicesLength,
  name,
  styles,
  isForFull,
  isFull,
}: {
  slicesLength: number;
  name: string;
  styles?: string;
  isForFull?: boolean;
  isFull?: boolean;
}) => {
  const slices = new Array(slicesLength).fill(null).map((n, i) => i);

  return (
    <div
      className={
        "flex-row space-x-2 mt-4 mb-6 lg:mb-8 " +
        (isForFull
          ? isFull
            ? "flex lg:hidden"
            : "hidden"
          : "hidden lg:flex") +
        (styles || "")
      }
    >
      {slices.map((slice, i) => (
        <img
          key={i}
          src={`/images/products/${name}/slice${i + 1}.jpg`}
          alt=""
          loading="lazy"
          className="w-[30px] h-[30px] aspect-square rounded-1 border-[1px] border-black lg:w-8 lg:h-8"
        />
      ))}
    </div>
  );
};

export default ProductKitchenSlices;
