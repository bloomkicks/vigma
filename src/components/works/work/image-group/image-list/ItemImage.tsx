import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import type { WorkImage } from "../../../../../types/works";
import Box from "@mui/material/Box";

const ItemImage = ({
  src,
  width,
  height,
  onFocus,
}: WorkImage & { onFocus: () => void }) => {
  return (
    <ImageListItem onClick={onFocus}>
      <Box width="50%" height="100%">
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
    </ImageListItem>
  );
};

export default ItemImage;
