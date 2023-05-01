import Box from "@mui/material/Box";

const Background = () => {
  const imgSrc = process.env.HERO_ASSETS + "/background";
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      overflow="hidden"
      left="0"
      top="0"
      sx={{ bgcolor: "#606060" }}
    >
      <Box
        component="img"
        src={imgSrc + ".jpg"}
        alt=""
        srcSet={`${imgSrc}.jpg 1920w, ${imgSrc}-sm.jpg 600w`}
        sizes={`(max-width: 600px) 600px, 1920px`}
        width="100%"
        height="100%"
        sx={{
          userSelect: "none",
          objectFit: "cover",
          objectPosition: { xs: "left", md: "center" },
        }}
      ></Box>
    </Box>
  );
};

export default Background;
