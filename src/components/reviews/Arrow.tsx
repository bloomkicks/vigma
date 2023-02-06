import Box from "@mui/material/Box";

const Arrow = ({
  isLeft,
  clickHandler,
  reviewIndex,
  length,
  slice,
}: {
  isLeft?: boolean;
  clickHandler: (isLeft: boolean) => void;
  reviewIndex: number;
  length: number;
  slice: number;
}) => {
  let isActive =
    (0 < reviewIndex && isLeft) ||
    (reviewIndex < length - 1 - slice && !isLeft);

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
        opacity: isActive ? 1 : 0.35,
      }}
      onClick={() => clickHandler(isLeft)}
    >
      <Box
        component="img"
        src={
          process.env.REVIEWS_ASSETS +
          (isLeft ? "/arrow-left.svg" : "/arrow-right.svg")
        }
        alt={isLeft ? "Назад" : "Вперед"}
        height={{ xs: 38, md: 50 }}
        sx={{ mb: 2, "&::selection": { backgroundColor: "transparent" } }}
      ></Box>
    </Box>
  );
};

export default Arrow;
