import Box from "@mui/material/Box";

const ItemColor = ({ color }: { color: string }) => {
  return (
    <Box
      sx={{
        background: color,
        width: 42,
        height: 42,
        border: "1px solid #00000040",
        borderRadius: 2,
      }}
    ></Box>
  );
};

export default ItemColor;
