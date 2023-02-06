import Image from "next/image";
import type { ProductImage } from "../../../../types/products";
import Box from "@mui/material/Box";

const FocusedImage = ({ src, width, height }: ProductImage) => {
  return (
    <Box
      position="relative"
      bgcolor="secondary.dark"
      width="100%"
      height="70%"
      sx={{
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
      }}
    >
      <Image
        src={process.env.PRODUCTS_ASSETS + "/" + src}
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
