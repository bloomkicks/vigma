import type { WorkProps } from "../../../types/works";
import ImageGroup from "./image-group/ImageGroup";
import WorkInfo from "./work-info/WorkInfo";
import Stack from "@mui/material/Stack";

const Work = ({ info, images }: WorkProps) => {
  return (
    <Stack
      component="section"
      direction="row"
      justifyContent="center"
      flexWrap="nowrap"
      spacing={4}
      sx={{ width: "100%", mx: "auto", px: 4, textAlign: "left" }}
    >
      <ImageGroup
        images={images}
        sx={{ width: "50%", maxWidth: 630, height: 550 }}
      />
      <WorkInfo {...info} sx={{ width: "50%" }} />
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
