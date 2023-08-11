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
  const [isMedium, setIsMedium] = useState(false);
  useEffect(() => {
    let isMd = window.innerWidth > 1024 - 1;
    setIsMedium(isMd);
    setIsLaptop(isMd && window.innerWidth > 1280 - 1);
    window.addEventListener("resize", () => {
      let isMd = window.innerWidth > 1024 - 1;
      setIsMedium(isMd);
      setIsLaptop(isMd && window.innerWidth > 1280 - 1);
    });
  }, []);

  const productWidth = isLaptop
    ? 860
    : isMedium
    ? 440
    : isFull
    ? 307
    : 290;

  return (
    <div
      className={`relative w-[290px] h-[400px] rounded-2 ${
        isFull ? "bg-transparent" : "bg-white shadow-strong"
      } text-black lg:flex lg:flex-row lg:items-stretch ${styles}`}
      style={{
        width: productWidth + "px",
        height: isLaptop
          ? "390px"
          : isFull
          ? "auto"
          : isMedium
          ? "420px"
          : "400px",
      }}
    >
      {isSlider || isFull ? (
        <ImageSlider
          width={productWidth}
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
          srcSet={`images/products/${name}/1-sm.jpg 290w, images/products/${name}/1.jpg 480w`}
          sizes="(max-width: 1024px) 290px, 480px"
          alt="Изображение не найдено"
          className="h-[65%] min-w-full object-cover object-center rounded-t-2 bg-gray-200 text-center lg:min-w-0 lg:w-[56%] lg:rounded-l-2 lg:rounded-tr-0"
          style={{
            height: isLaptop ? "100%" : "65%",
          }}
        />
      )}
      <ProductTags
        discount={productInfo.discount}
        isHit={productInfo.isHit}
      />
      <ProductInfoBar {...productInfo} name={name} isFull={isFull} />
    </div>
  );
};

export default Product;
