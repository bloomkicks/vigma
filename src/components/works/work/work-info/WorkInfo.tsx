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
      <Typography variant="h4" sx={{ textTransform: "uppercase", mb: 1.5 }}>
        {title}
      </Typography>
      <Typography mb={1.4}>
        {description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada ex ut tellus eleifend, vel fermentum nisl lacinia"}
      </Typography>
      <ListColor colors={colors} />
      <ListProperty properties={properties} />
    </Box>
  );
};

export default WorkInfo;
