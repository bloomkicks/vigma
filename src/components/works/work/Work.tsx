import WorkInfo from "./work-info/WorkInfo";
import type { WorkInfoProps, WorkImage } from "../../../types/works";
import Box from "@mui/material/Box";

const Work = ({
  workInfoProps,
  images,
}: {
  workInfoProps: WorkInfoProps;
  images: WorkImage[];
}) => {
  return (
    <Box>
      <WorkInfo {...workInfoProps} />
    </Box>
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
