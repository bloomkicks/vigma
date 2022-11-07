import type { WorkProperty } from "../../../../../types/works";
import ItemProperty from "./ItemProperty";
import Stack from "@mui/material/Stack";

const ListProperty = ({
  properties,
  sx,
}: {
  properties: WorkProperty[];
  sx?: any;
}) => {
  return (
    <Stack spacing={2} sx={sx}>
      {properties.map((property) => (
        <ItemProperty {...property} key={property.property + property.value} />
      ))}
    </Stack>
  );
};

export default ListProperty;
