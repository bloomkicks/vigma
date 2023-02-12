import Image from "next/image";
import Box from "@mui/material/Box";

const Background = () => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      // maxHeight={{ xs: 800, md: 700, xl: 800 }}
      overflow="hidden"
      left="0"
      top="0"
    >
      <Image
        src={process.env.HERO_ASSETS + "/background.png"}
        layout="fill"
        objectFit="cover"
        alt=""
        width={1920}
        height={1008}
        style={{ userSelect: "none" }}
      />
    </Box>
    // <Box
    //   component="img"
    //   src={process.env.HERO_ASSETS + "/background.png"}
    //   alt=""
    //   height="100%"
    //   width="100%"
    //   sx={{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     overflow: "hidden",
    //     layout: "fill",
    //     objectFit: "cover",
    //     userSelect: "none",
    //   }}
    // ></Box>
  );
};

export default Background;
