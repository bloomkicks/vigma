import FocusedImage from "./FocusedImage";
import ListImage from "./image-list/ImageList";
import { useState } from "react";
import Box from "@mui/material/Box";
import type { ProductImage } from "../../../../types/products";

const ImageGroup = ({
  images,
  sx,
}: { images: ProductImage[] } & { sx?: any }) => {
  const [focusedImageIndex, setFocusedImageIndex] = useState<number>(0);

  function focusHandler(index: number) {
    setFocusedImageIndex(index);
  }

  return (
    <Box sx={sx}>
      <FocusedImage {...images[focusedImageIndex]} />
      <ListImage
        images={images}
        onFocus={focusHandler}
        focusedImageIndex={focusedImageIndex}
      />
    </Box>
  );
};

export default ImageGroup;
