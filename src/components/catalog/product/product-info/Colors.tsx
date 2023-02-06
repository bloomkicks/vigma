import Box from "@mui/material/Box";

const Colors = ({ colors }: { colors: string[] }) => {
  return (
    <Box
    // mb={{ xs: 1, md: 4 }}
    >
      {colors.map((color) => (
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
          key={color}
        ></Box>
      ))}
    </Box>
  );
};

export default Colors;
