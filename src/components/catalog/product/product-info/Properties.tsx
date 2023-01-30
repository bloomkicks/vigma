import type { ProductProperty } from "../../../../types/products";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Properties = ({
  properties,
  sx,
}: {
  properties: ProductProperty[];
  sx?: any;
}) => {
  return (
    <Stack spacing={1.6} sx={sx}>
      {properties.map((property) => (
        <Box key={property.property + property.value}>
          <Typography
            component="p"
            variant="subtitle2"
            sx={{ display: "inline-block", fontWeight: "500", mr: "15px" }}
          >
            {property.property}:
          </Typography>
          <Typography component="p" variant="subtitle2" display="inline-block">
            {property.value}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default Properties;
