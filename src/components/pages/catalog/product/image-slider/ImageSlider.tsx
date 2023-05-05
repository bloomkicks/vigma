import type { ProductImage } from "../../../../../types/products";
import SliderArrow from "./SliderArrow";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const ImageSlider = ({ images }: { images: ProductImage[] }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  let width = 391;
  let height = 400;
  let smWidth = 371;
  let smHeight = 385;
  let mobileWidth = 341;
  let mobileHeight = 355;

  const isEdge = (isRight) =>
    (focusedIndex === 0 && !isRight) ||
    (focusedIndex === images.length - 1 && isRight);

  function slideHandler(isRight: boolean): void {
    if (isEdge(isRight)) return;
    setFocusedIndex((prev) => (isRight ? prev + 1 : prev - 1));
  }

  return (
    <Box position="relative" width="100%">
      <SliderArrow onClick={slideHandler} isEdge={isEdge(false)} />
      <SliderArrow isRight onClick={slideHandler} isEdge={isEdge(true)} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        width="100%"
        height={{ xs: mobileHeight, sm: smHeight, md: height }}
        position="relative"
        sx={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          border: "1px solid #aaaaaa",
          borderTop: "1.5px solid #aaaaaa",
          overflow: "hidden",
        }}
      >
        {images.map((image, i) => (
          <Box
            flexShrink={0}
            width={{ xs: mobileWidth, sm: smWidth, md: width }}
            height={{ xs: mobileHeight, sm: smHeight, md: height }}
            display="flex"
            alignItems="center"
            sx={{
              overflow: "hidden",
              transform: {
                xs: `translatex(-${mobileWidth * focusedIndex}px)`,
                sm: `translatex(-${smWidth * focusedIndex}px)`,
                md: `translatex(-${width * focusedIndex}px)`,
              },
              transition: "transform 300ms ease-out",
            }}
            key={image.src}
          >
            <Box
              component="img"
              alt="Изображение не найдено. Попробуйте обновить страницу"
              src={process.env.PRODUCTS_ASSETS + "/" + image.src}
              width={{ xs: mobileWidth, sm: smWidth, md: width }}
              minHeight={{ xs: mobileHeight, sm: smHeight, md: height }}
              sx={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            ></Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ImageSlider;
