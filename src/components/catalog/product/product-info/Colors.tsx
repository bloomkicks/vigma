import Box from "@mui/material/Box";

const Colors = ({ colors }: { colors: string[] }) => {
  return (
    <Box>
      {colors.map((color) => {
        let gradient: string[] = null;
        let background: string = color;

        if (color.includes("wood")) {
          gradient = color.split("-");
          background = gradient[1];
        } else if (color.includes("light")) {
          gradient = color.split("-");
          background = gradient[1];
        }

        return (
          <Box
            sx={{
              display: "inline-block",
              mr: 1,
              background: background,
              width: { xs: 36, md: 42 },
              height: { xs: 36, md: 42 },
              border: "1px solid #00000040",
              borderRadius: 2,
            }}
            key={color}
          ></Box>
        );
      })}
    </Box>
  );
};

export default Colors;
