import MoreProducts from "./MoreProducts";
import useSlider from "@/hooks/use-slider";
import { mainProducts } from "@/data/products";

import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import ProductCard from "../product-card/ProductCard";

const MainProductsSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler, isLaptop, isMedium } =
    useSlider(mainProducts.length, true);

  return (
    <section id="products" className="section-light lg:!pt-[52px]">
      <div className="flex flex-row justify-center items-center -ml-1">
        <SliderControl isLeft onClick={moveLeftHandler} isSmall />
        <Slider
          itemWidth={isLaptop ? 860 : isMedium ? 440 : 290}
          curIndex={curIndex}
          spacing={20}
          shadowSize={4}
          styles="space-x-5 lg:duration-[650ms]"
          isLaptop={isLaptop}
          isOnly
        >
          {mainProducts.map((product) => (
            <ProductCard {...product} key={product.name} styles="shrink-0" />
          ))}
        </Slider>
        <SliderControl onClick={moveRightHandler} isSmall />
      </div>
      <MoreProducts />
    </section>
  );
};

export default MainProductsSection;
