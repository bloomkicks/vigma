import ItemImage from "./ItemImage";
import type { WorkImage } from "../../../../../types/works";
import Stack from "@mui/material/Stack";

const ListImage = ({ images }: { images: WorkImage[] }) => {
  return (
    <Stack>
      {images.map((image) => (
        <ItemImage {...image} key={image.src} />
      ))}
    </Stack>
  );
};

export default ListImage;
