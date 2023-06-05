import type ProductProps from "@/types/ProductProps";

const ProductInfoBar = ({
  title,
  category,
  price,
  discount,
  oldPrice,
  id,
}: ProductProps) => {
  return (
    <div className="p-5 pt-[11px] rounded-b-2">
      <div className="mb-[7px]">
        <h4 className="large inline mr-[7px]">{title}</h4>
        <p className="subtitle1 inline">{category}</p>
      </div>
      <div className="flex flex-row justify-center items-start">
        <div className="">
          <div className="bg-[#317BBF] inline-block rounded-[3px] px-[5px] py-1">
            <span className="block text-white font-strong text-[12px] font-bold">
              -{discount}%
            </span>
          </div>
          <span className="ml-1.5 inline-block align-middle line-through">{oldPrice}</span>
          <p className="block mt-1">
            {price}₽ <span className="body2">за п.м.</span>
          </p>
        </div>
        <button className="txt-button py-2 px-5 bg-primary rounded-2 ml-3.5">Подробнее</button>
      </div>
    </div>
  );
};

export default ProductInfoBar;
