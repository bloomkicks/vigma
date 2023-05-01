import Box from "@mui/material/Box";

const SliderArrow = ({
  isRight,
  onClick,
  isEdge,
}: {
  isRight?: boolean;
  isEdge: boolean;
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
        left: isRight ? "" : { xs: -18, md: -20 },
        right: isRight ? { xs: -18, md: -20 } : "",
        top: "50%",
        transform: "translateY(-26%)",
        zIndex: 2,
        outline: "none",
        border: "none",
        borderRadius: "8px",
        boxShadow: "1px 2px 4px rgba(0,0,0,0.25)",
      }}
      width={{ xs: 36, md: 40 }}
      height={{ xs: 75, md: 80 }}
      // bgcolor="rgba(157, 200, 205)"
      bgcolor="primary.dark"
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
          width: { xs: 15, md: 17 },
          height: "auto",
          transition: "opacity 300ms ease-out",
          opacity: isEdge && 0.55,
        }}
      ></Box>
    </Box>
  );
};

export default SliderArrow;
