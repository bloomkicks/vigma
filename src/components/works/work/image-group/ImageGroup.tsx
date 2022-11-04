import FocusedImage from "./FocusedImage";
import ListImage from "./image-list/ListImage";
import { useState } from "react";
import Box from "@mui/material/Box";
import type { WorkImage } from "../../../../types/works";

const ImageGroup = ({ images, sx }: { images: WorkImage[] } & { sx?: any }) => {
  const [focusedImageIndex, setFocusedImageIndex] = useState<number>();

  function focusHandler(index: number) {
    setFocusedImageIndex(index);
  }

  return (
    <Box sx={sx}>
      <FocusedImage {...images[focusedImageIndex]} />
      <ListImage images={images} onFocus={focusHandler} />
    </Box>
  );
};

export default ImageGroup;
