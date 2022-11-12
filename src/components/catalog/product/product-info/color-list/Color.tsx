import Box from "@mui/material/Box";

const Color = ({ color }: { color: string }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        mr: 1,
        background: color,
        width: { xs: 36, md: 42 },
        height: { xs: 36, md: 42 },
        border: "1px solid #00000040",
        borderRadius: 2,
      }}
    ></Box>
  );
};

export default Color;
