import ProductCard from "../product-card/ProductCard";
import type { ProductProps } from "@/data/products";

const ProductHeroSection = ({ ...productInfo }: ProductProps) => {
  return (
    <section className="section-light !pt-[40px] !pb-[45px] lg:!pt-[75px] lg:!pb-[80px] mx-auto xs:!px-0">
      <ProductCard {...productInfo} isFull styles="mx-auto" />
    </section>
  );
};

export default ProductHeroSection;
