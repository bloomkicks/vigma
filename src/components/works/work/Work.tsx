import type { WorkProps } from "../../../types/works";
import ImageGroup from "./image-group/ImageGroup";
import WorkInfo from "./work-info/WorkInfo";
import Stack from "@mui/material/Stack";

const Work = ({ info, images, overrides }: WorkProps & { overrides?: any }) => {
  return (
    <Stack
      component="section"
      direction="row"
      justifyContent="center"
      flexWrap="nowrap"
      spacing={4}
      sx={{ width: "100%", mx: "auto", px: 4, textAlign: "left" }}
      {...overrides}
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
