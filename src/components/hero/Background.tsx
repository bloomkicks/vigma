import Image from "next/image";
import Box from "@mui/material/Box";

const Background = () => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      maxHeight={900}
      overflow="hidden"
      left="0"
      top="0"
    >
      <Image
        src="/pictures/hero/background.png"
        layout="fill"
        objectFit="cover"
        alt=""
        width={1920}
        height={1008}
      />
    </Box>
  );
};

export default Background;
