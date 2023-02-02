import Box from "@mui/material/Box";

const Arrow = ({
  isLeft,
  clickHandler,
  currentIndex,
  length,
}: {
  isLeft?: boolean;
  clickHandler: (isLeft: boolean) => void;
  currentIndex: number;
  length: number;
}) => {
  let isActive =
    (0 < currentIndex && isLeft) || (currentIndex < length - 1 && !isLeft);

  return (
    <Box
      height={200}
      width={100}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: isLeft ? "flex-end" : "flex-start",
        pl: { xs: 0.2, sm: isLeft ? 0 : 0.7 },
        pr: { xs: 0.2, sm: isLeft ? 0.7 : 0 },
        maxWidth: "10%",
        minWidth: 50,
        position: "relative",
        zIndex: 3,
        opacity: isActive ? 1 : 0.4,
      }}
      onClick={() => clickHandler(isLeft)}
    >
      <Box
        component="img"
        src={process.env.REVIEWS_ASSETS + "/arrow-right.svg"}
        height={{ xs: 38, md: 50 }}
        sx={{ transform: isLeft ? "rotate(180deg)" : "", mb: 2 }}
      ></Box>
    </Box>
  );
};

export default Arrow;
