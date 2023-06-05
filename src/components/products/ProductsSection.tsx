import getSliderIndex from "@/features/get-slider-index";
import { useState } from "react";
import products from "@/data/products";

import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import Product from "./Product";

const ProductsSection = () => {
  const [curIndex, setCurIndex] = useState(0);
  function moveRightHandler() {
    setCurIndex((prev) => getSliderIndex(prev, products.length));
  }
  function moveLeftHandler() {
    setCurIndex((prev) =>
      getSliderIndex(prev, products.length, true)
    );
  }

  return (
    <section className="section-light flex flex-row justify-center items-center">
      <SliderControl isLeft onClick={moveLeftHandler} />
      <Slider
        itemWidth={290}
        curIndex={curIndex}
        spacing={16}
        shadowSize={4}
        styles="space-x-4 pb-1.5"
      >
        {products.map((product) => (
          <Product
            {...product}
            key={product.id}
            styles="shrink-0 translate-x-1"
          />
        ))}
      </Slider>
      <SliderControl onClick={moveRightHandler} />
    </section>
  );
};

export default ProductsSection;
