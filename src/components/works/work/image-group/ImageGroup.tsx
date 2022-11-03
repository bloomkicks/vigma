import FocusedImage from "./FocusedImage";
import ListImage from "./image-list/ListImage";
import { useState } from "react";
import Box from "@mui/material/Box";
import type { WorkImage } from "../../../../types/works";

const ImageGroup = ({ images }: { images: WorkImage[] }) => {
  const [focusedImageIndex, setFocusedImageIndex] = useState<string>();

  return (
    <Box component="section">
      <FocusedImage {...images[focusedImageIndex]} />
      <ListImage images={images} />
    </Box>
  );
};

export default ImageGroup;
