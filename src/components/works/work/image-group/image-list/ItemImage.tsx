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
        borderWidth: isFocused ? 5 : 0,
        borderStyle: "solid",
        borderColor: "primary.dark",
      }}
    ></Box>
  );
};

export default ItemImage;
