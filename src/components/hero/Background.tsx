import Image from "next/image";
import Box from "@mui/material/Box";

const Background = () => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      overflow="hidden"
      left="0"
      top="0"
      sx={{ bgcolor: "#313231" }}
    >
      <Image
        src={process.env.HERO_ASSETS + "/background.jpg"}
        layout="fill"
        objectFit="cover"
        alt=""
        width={1920}
        height={1008}
        style={{ userSelect: "none" }}
      />
    </Box>
  );
};

export default Background;
