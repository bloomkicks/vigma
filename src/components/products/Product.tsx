import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import ProductTags from "./ProductTags";
import ProductInfoBar from "./ProductInfoBar";
import type { ProductProps } from "@/data/products";

const Product = ({
  imagesLength,
  styles,
  isSlider,
  name,
  isFull,
  ...productInfo
}: ProductProps & {
  styles?: string;
  isSlider?: boolean;
  isFull?: boolean;
}) => {
  const [isLaptop, setIsLaptop] = useState(false);
  useEffect(() => {
    setIsLaptop(window.innerWidth > 1024);
    window.addEventListener("resize", () => {
      setIsLaptop(window.innerWidth > 1024);
    });
  }, []);

  return (
    <div
      className={`relative w-[290px] h-[400px] rounded-2 ${
        isFull ? "bg-transparent" : "bg-white shadow-strong"
      } text-black lg:flex lg:flex-row lg:items-stretch ${styles}`}
      style={{
        width: isLaptop ? "860px" : isFull ? "307px" : "290px",
        height: isLaptop ? "390px" : isFull ? "auto" : "400px",
      }}
    >
      {isSlider || isFull ? (
        <ImageSlider
          width={isLaptop ? 480 : isFull ? 307 : 290}
          height={isLaptop ? "100%" : isFull ? "307px" : "65%"}
          imagesLength={imagesLength}
          productName={name}
          styles=""
          imageStyles={isFull ? "shadow-normal" : ""}
          isFull={isFull}
        />
      ) : (
        <img
          src={"/images/products/" + name + "/1.jpg"}
          alt="Изображение не найдено"
          className="h-[65%] min-w-full object-cover object-center rounded-t-2 bg-gray-200 text-center lg:min-w-0 lg:w-[56%] lg:rounded-l-2 lg:rounded-tr-0"
          style={{
            height: isLaptop ? "100%" : "65%",
          }}
        />
      )}
      <ProductTags discount={productInfo.discount} isHit={productInfo.isHit} />
      <ProductInfoBar {...productInfo} name={name} isFull={isFull} />
    </div>
  );
};

export default Product;
