import Product from "../products/Product";
import { useState, useEffect } from "react";
import type { ProductProps } from "@/data/products";

const ProductPageSection = ({ ...productInfo }: ProductProps) => {
  const [isLaptop, setIsLaptop] = useState(false);
  useEffect(() => {
    setIsLaptop(window.innerWidth > 1024);
    window.addEventListener("resize", () => {
      setIsLaptop(window.innerWidth > 1024);
    });
  }, []);

  return (
    <section className="section-light !pt-[40px] !pb-[45px] lg:!pt-[75px] lg:!pb-[80px] mx-auto">
      <Product {...productInfo} isFull />
    </section>
  );
};

export default ProductPageSection;
