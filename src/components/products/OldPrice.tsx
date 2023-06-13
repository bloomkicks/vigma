const OldPrice = ({
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
    newOldPrice.slice(0, 3) + "." + newOldPrice.slice(3, 6);

  return (
    <span
      className={
        "ml-[7px] numbers mr-2.5 mt-[0.5px] relative opacity-90" +
        (styles || "")
      }
    >
      <div className="h-0.5 w-[104%] rotate-[12deg] absolute left-0 top-[11px] bg-black opacity-90"></div>
      {newOldPrice}
    </span>
  );
};

export default OldPrice;
