import Product from "../products/Product";
import type { ProductProps } from "@/data/products";

const ProductPageSection = ({ ...productInfo }: ProductProps) => {
  return (
    <section className="section-light !pt-[40px] !pb-[45px] lg:!pt-[75px] lg:!pb-[80px] mx-auto xs:!px-0">
      <Product {...productInfo} isFull styles="mx-auto" />
    </section>
  );
};

export default ProductPageSection;
