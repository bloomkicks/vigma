import type { ProductImage } from "../../../../types/products";
import SliderArrow from "./SliderArrow";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const ImageSlider = ({ images }: { images: ProductImage[] }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  let width = 381;
  let height = 420;
  let mobileWidth = 361;
  let mobileHeight = 390;

  function slideHandler(isRight: boolean): void {
    if (
      (focusedIndex === 0 && !isRight) ||
      (focusedIndex === images.length - 1 && isRight)
    )
      return;
    setFocusedIndex((prev) => (isRight ? prev + 1 : prev - 1));
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      height={{ xs: mobileHeight, md: height }}
      position="relative"
      sx={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        border: "1px solid black",
        borderTop: "1.5px solid black",
        overflow: "hidden",
      }}
    >
      <SliderArrow onClick={slideHandler} />
      <SliderArrow isRight onClick={slideHandler} />
      {images.map((image, i) => (
        <Box
          flexShrink={0}
          width={{ xs: mobileWidth, md: width }}
          height={{ xs: mobileHeight, md: height }}
          sx={{
            overflow: "hidden",
            transform: {
              xs: `translatex(-${mobileWidth * focusedIndex}px)`,
              md: `translatex(-${width * focusedIndex}px)`,
            },
            transition: "transform 300ms ease-out",
          }}
          key={image.src}
        >
          <Box
            component="img"
            src={process.env.PRODUCTS_ASSETS + "/" + image.src}
            alt=""
            width={{ xs: mobileWidth, md: width }}
            minHeight={{ xs: mobileHeight, md: height }}
            sx={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          ></Box>
        </Box>
      ))}
    </Stack>
  );
};

export default ImageSlider;
