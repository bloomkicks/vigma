import type { WorkInfoProps } from "../../../../types/works";
import ListColor from "./color-list/ListColor";
import ListProperty from "./property-list/ListProperty";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WorkInfo = ({
  title,
  description,
  price,
  colors,
  properties,
  sx,
}: WorkInfoProps & { sx?: any }) => {
  return (
    <Box sx={sx}>
      <Typography variant="h4">{title}</Typography>
      <Typography>{description}</Typography>
      <ListColor colors={colors} />
      <ListProperty properties={properties} />
    </Box>
  );
};

export default WorkInfo;
