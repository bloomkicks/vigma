import Box from "@mui/material/Box";

const ItemColor = ({ color }: { color: string }) => {
  return (
    <Box
      sx={{ background: color, width: 40, height: 40, borderRadius: 5 }}
    ></Box>
  );
};

export default ItemColor;
