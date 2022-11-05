import Image from "next/image";
import type { WorkImage } from "../../../../types/works";
import Box from "@mui/material/Box";

const FocusedImage = ({ src, width, height }: WorkImage) => {
  return (
    <Box position="relative" bgcolor="secondary.dark" width="100%" height="65%">
      <Image
        src={process.env.WORKS_ASSETS + "/" + src}
        width={width}
        height={height}
        loading="eager"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        alt="Изображение не найдено..."
      />
    </Box>
  );
};

export default FocusedImage;
