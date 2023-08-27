const ProductOldPrice = ({
  oldPrice,
  styles,
  price,
  discount = 40,
}: {
  oldPrice?: string;
  styles?: string;
  price: string;
  discount?: number;
}) => {
  let priceNumber = parseInt(price.replace(/[^\d]/g, ""));
  let newOldPrice =
    oldPrice ||
    (priceNumber + priceNumber * (discount / 100)).toString();
  newOldPrice =
    newOldPrice.length === 5
      ? newOldPrice.slice(0, 2) + "." + newOldPrice.slice(2, 6)
      : newOldPrice.slice(0, 3) + "." + newOldPrice.slice(3, 6);

  return (
    <span
      className={
        "ml-[7px] numbers mr-2.5 mt-[0.5px] relative opacity-90" +
        (styles || "")
      }
    >
      <div className="h-0.5 w-[103%] lg:w-[104%] rotate-[11deg] lg:rotate-[12deg] absolute left-[-1px] top-[9px] lg:top-[11px] bg-black opacity-90"></div>
      {newOldPrice}
    </span>
  );
};

export default ProductOldPrice;
