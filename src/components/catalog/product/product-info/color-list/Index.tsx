import Color from "./Color";
import Box from "@mui/material/Box";

const ColorList = ({ colors }: { colors: string[] }) => {
  return (
    <Box mb={5}>
      {colors.map((color) => (
        <Color color={color} key={color} />
      ))}
    </Box>
  );
};

export default ColorList;
