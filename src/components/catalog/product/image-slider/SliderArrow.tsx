import Box from "@mui/material/Box";

const SliderArrow = ({
  isRight,
  onClick,
}: {
  isRight?: boolean;
  onClick: (isRight: boolean) => void;
}) => {
  return (
    <Box
      component="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      sx={{
        left: isRight ? "" : 0,
        right: isRight ? 0 : "",
        top: "50%",
        transform: "translateY(-40%)",
        zIndex: 2,
        outline: "none",
        border: "none",
      }}
      width={40}
      height={80}
      bgcolor="rgba(75, 110, 6, 0.4)"
      onClick={() => onClick(isRight)}
    >
      <Box
        component="img"
        alt={isRight ? "Направо" : "Налево"}
        src={
          process.env.GENERAL_ASSETS +
          `/slider-arrow-${isRight ? "right" : "left"}.svg`
        }
        sx={{
          transform: `translateX(${isRight ? "" : "-"}3px)`,
        }}
      ></Box>
    </Box>
  );
};

export default SliderArrow;
