import type { ProductProperty } from "../../../../../types/products";
import Property from "./Property";
import Stack from "@mui/material/Stack";

const PropertyList = ({
  properties,
  sx,
}: {
  properties: ProductProperty[];
  sx?: any;
}) => {
  return (
    <Stack spacing={2} sx={sx}>
      {properties.map((property) => (
        <Property {...property} key={property.property + property.value} />
      ))}
    </Stack>
  );
};

export default PropertyList;
