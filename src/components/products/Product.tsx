import ProductInfoBar from "./ProductInfoBar";
import type ProductProps from "@/types/ProductProps";

const Product = ({
  imgSrc,
  styles,
  ...productInfo
}: ProductProps & { styles?: string }) => {
  return (
    <div
      className={`w-[290px] h-[382px] shadow-strong rounded-2 bg-white ${styles}`}
    >
      <img
        src={imgSrc}
        alt="Изображение не найдено"
        className="h-[72%] min-w-full object-cover object-center rounded-t-2 bg-gray-200 text-center"
      />
      <ProductInfoBar {...productInfo} imgSrc={imgSrc} />
    </div>
  );
};

export default Product;
