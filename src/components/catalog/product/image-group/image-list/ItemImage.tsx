import type { ProductImage } from "../../../../../types/products";
import Box from "@mui/material/Box";

const ItemImage = ({
  src,
  width,
  height,
  onFocus,
  isFocused,
}: ProductImage & { onFocus: () => void; isFocused: boolean }) => {
  return (
    <Box
      component="img"
      onClick={onFocus}
      src={src}
      alt="Изображение не найдено..."
      sx={{
        height: "100%",
        width: "auto",
        borderWidth: isFocused ? 5 : 0,
        borderStyle: "solid",
        borderColor: "primary.dark",
        cursor: "pointer",
      }}
    ></Box>
  );
};

export default ItemImage;
