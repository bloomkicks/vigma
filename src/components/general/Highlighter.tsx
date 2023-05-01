import Box from "@mui/material/Box";

const Highlighter = ({
  lines,
  sx,
  color,
}: {
  lines: { length: number; opacity: number }[];
  sx;
  color?: string;
}) => {
  return (
    <Box position="absolute" sx={sx}>
      {lines.map((line) => (
        <Box
          key={"line" + line.length}
          sx={{
            bgcolor: `rgba(${color || "151, 208, 221"}, ${
              line.opacity || "0.3"
            })`,
            width: line.length + "%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: "100px",
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default Highlighter;
