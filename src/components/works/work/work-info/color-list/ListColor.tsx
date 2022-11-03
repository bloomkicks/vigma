import ItemColor from "./ItemColor";
import Stack from "@mui/material/Stack";

const ListColor = ({ colors }: { colors: string[] }) => {
  return (
    <Stack direction="row">
      {colors.map((color) => (
        <ItemColor color={color} key={color} />
      ))}
    </Stack>
  );
};

export default ListColor;
