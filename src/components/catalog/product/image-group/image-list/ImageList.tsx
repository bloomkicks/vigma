import Stack from "@mui/material/Stack";
import ItemImage from "./ItemImage";
import type { ProductImage } from "../../../../../types/products";

const ImageList = ({
  images,
  focusedImageIndex,
  onFocus,
}: {
  images: ProductImage[];
  focusedImageIndex: number;
  onFocus: (index: number) => void;
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      flexWrap="nowrap"
      spacing={2}
      sx={{
        width: "100%",
        height: "35%",
        overflowX: "auto",
        overflowY: "hidden",
        pt: 2,
        pb: "4px",
        "::-webkit-scrollbar": {
          height: "10px",
          backgroundColor: "#f0f0f0",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#cdcdcd",
        },
        scrollbarWidth: "thin",
      }}
    >
      {images.map((image, index) => (
        <ItemImage
          {...image}
          src={process.env.PRODUCTS_ASSETS + "/" + image.src}
          onFocus={() => onFocus(index)}
          isFocused={index === focusedImageIndex}
          key={image.src}
        />
      ))}
    </Stack>
  );
};

export default ImageList;
