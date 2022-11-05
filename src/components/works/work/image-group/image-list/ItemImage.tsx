import Image from "next/image";
import type { WorkImage } from "../../../../../types/works";
import Box from "@mui/material/Box";

const ItemImage = ({
  src,
  width,
  height,
  onFocus,
  isFocused,
}: WorkImage & { onFocus: () => void; isFocused: boolean }) => {
  return (
    <Box
      component="img"
      onClick={onFocus}
      src={src}
      alt="Изображение не найдено..."
      sx={{
        height: "100%",
        width: "auto",
        border: isFocused ? "3px solid black" : "",
      }}
    ></Box>
  );
};

export default ItemImage;
