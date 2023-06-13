import SliderControl from "../ui/SliderControl";
import useSlider from "@/hooks/use-slider";
import Slider from "../ui/Slider";

const ImageSlider = ({
  styles,
  width,
  height,
  imageStyles,
  shadowSize,
  productName,
  imagesLength,
  isFull,
}: {
  styles: string;
  width: number;
  height: string;
  imagesLength: number;
  imageStyles?: string;
  shadowSize?: number;
  productName: string;
  isFull?: boolean;
}) => {
  const { curIndex, moveLeftHandler, moveRightHandler, isLaptop } =
    useSlider(imagesLength, true);
  const images = new Array(imagesLength).fill(null).map((n, i) => i);

  return (
    <div
      className={"relative " + styles}
      style={{
        height: height || "",
      }}
    >
      <SliderControl
        isLeft
        isSmall
        onClick={moveLeftHandler}
        isProduct
        styles=""
        imgStyles="!w-3"
      />
      <Slider
        curIndex={curIndex}
        itemWidth={width}
        height="100%"
        spacing={16}
        shadowSize={shadowSize || undefined}
        styles="space-x-4"
        containerStyles={
          isFull
            ? "rounded-2"
            : "rounded-t-2 lg:rounded-l-2 lg:rounded-r-0"
        }
        isLaptop={isLaptop}
        isOnly
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={`/images/products/${productName}/${
              i === 0 ? "1.jpg" : i + 1 + ".webp"
            }`}
            alt="Изображение не найдено"
            className={
              "w-[290px] h-[290px] aspect-square object-cover object-center " +
              (imageStyles || "")
            }
            style={{
              height: height,
              width: width + "px",
            }}
          />
        ))}
      </Slider>
      <SliderControl
        isSmall
        onClick={moveRightHandler}
        styles=""
        isProduct
        imgStyles="!w-3"
      />
    </div>
  );
};

export default ImageSlider;
