import useSlider from "@/hooks/use-slider";
import { useState } from "react";
import products from "@/data/products";

import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import Product from "./Product";

const ProductsSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler } = useSlider(
    products.length
  );

  return (
    <section className="section-light flex flex-row justify-center items-center" id="products">
      <SliderControl isLeft onClick={moveLeftHandler} isSmall />
      <Slider
        itemWidth={290}
        curIndex={curIndex}
        spacing={16}
        shadowSize={4}
        styles="space-x-4 pb-1.5 pt-0.5"
      >
        {products.map((product) => (
          <Product
            {...product}
            key={product.id}
            styles="shrink-0 translate-x-1"
          />
        ))}
      </Slider>
      <SliderControl onClick={moveRightHandler} isSmall />
    </section>
  );
};

export default ProductsSection;
