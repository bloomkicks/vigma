import type { WorkProperty } from "../../../../../types/works";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ItemProperty = ({ property, value }: WorkProperty) => {
  return (
    <Box>
      <Typography
        component="p"
        variant="subtitle2"
        sx={{ display: "inline-block", fontWeight: "bold", mr: "15px" }}
      >
        {property}:
      </Typography>
      <Typography component="p" variant="subtitle2" display="inline-block">
        {value}
      </Typography>
    </Box>
  );
};

export default ItemProperty;
