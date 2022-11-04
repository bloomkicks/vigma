import Image from "next/image";
import type { WorkImage } from "../../../../types/works";
import Box from "@mui/material/Box";

const FocusedImage = ({ src, width, height }: WorkImage) => {
  return (
    <Box bgcolor="#f3f3f3" width="100%" mb={2}>
      <Image
        src={src}
        width={width}
        height={height}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        alt="Изображение не найдено..."
      />
    </Box>
  );
};

export default FocusedImage;
