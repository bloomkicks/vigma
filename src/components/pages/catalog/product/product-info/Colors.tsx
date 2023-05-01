import Box from "@mui/material/Box";

const Colors = ({ colors }: { colors: string[] }) => {
  return (
    <Box>
      {colors.map((color) => {
        let gradient: string[] = null;
        let background: string = color;

        if (color.includes("wood")) {
          gradient = color.split("-");
          background = `repeating-linear-gradient(90deg, ${gradient[1]} 0px, ${gradient[2]} 2px, ${gradient[1]} 5px, ${gradient[2]} 7px)`;
        } else if (color.includes("light")) {
          gradient = color.split("-");
          background = `linear-gradient(45deg, ${gradient[1]} 18%, ${
            gradient[2] || "#ffe9bb"
          } 44%, ${gradient[1]} 70%)`;
        }

        return (
          <Box
            sx={{
              display: "inline-block",
              mr: 0.7,
              background: background,
              width: { xs: 38, md: 42.5 },
              height: { xs: 22, md: 24 },
              border: "1px solid #101010",
              borderRadius: "3px",
            }}
            key={color}
          ></Box>
        );
      })}
    </Box>
  );
};

export default Colors;
