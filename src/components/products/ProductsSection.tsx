import LinkToKitchens from "./LinkToKitchens";
import useSlider from "@/hooks/use-slider";
import { primaryProducts } from "@/data/products";

import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import Product from "./Product";

const ProductsSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler, isLaptop } =
    useSlider(primaryProducts.length, true);

  return (
    <section className="section-light " id="kitchens">
      <div className="flex flex-row justify-center items-center -ml-1">
        <SliderControl isLeft onClick={moveLeftHandler} isSmall />
        <Slider
          itemWidth={isLaptop ? 860 : 290}
          curIndex={curIndex}
          spacing={20}
          shadowSize={4}
          styles="space-x-5 lg:duration-[650ms]"
          isLaptop={isLaptop}
          isOnly
        >
          {primaryProducts.map((product) => (
            <Product
              {...product}
              key={product.name}
              styles="shrink-0"
            />
          ))}
        </Slider>
        <SliderControl onClick={moveRightHandler} isSmall />
      </div>
      <LinkToKitchens />
    </section>
  );
};

export default ProductsSection;
