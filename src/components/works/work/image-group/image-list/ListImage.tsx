import ItemImage from "./ItemImage";
import type { WorkImage } from "../../../../../types/works";
import ImageList from "@mui/material/ImageList";

const ListImage = ({
  images,
  onFocus,
}: {
  images: WorkImage[];
  onFocus: (index: number) => void;
}) => {
  return (
    <ImageList rowHeight={130} sx={{ width: "100%" }}>
      {images.map((image, index) => (
        <ItemImage {...image} onFocus={() => onFocus(index)} key={image.src} />
      ))}
    </ImageList>
  );
};

export default ListImage;
