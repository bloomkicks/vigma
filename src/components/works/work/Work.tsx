import type { WorkProps } from "../../../types/works";
import ImageGroup from "./image-group/ImageGroup";
import WorkInfo from "./work-info/WorkInfo";
import Stack from "@mui/material/Stack";

const Work = ({ info, images }: WorkProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <ImageGroup images={images} />
      <WorkInfo {...info} />
    </Stack>
  );
};

export default Work;

function formatPrice(price) {
  let formattedPrice = "";
  for (let i = price.length; i > 0; i--) {
    let toAdd = "";
    if (i % 3 === 0) {
      toAdd = ".";
    }
    toAdd += price[i - 1];
    formattedPrice = toAdd + formattedPrice;
  }
  formattedPrice = "от " + formattedPrice;
  return formattedPrice;
}
