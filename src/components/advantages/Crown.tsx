import Image from "next/image";
import Box from "@mui/material/Box";

const Crown = () => {
  return (
    <Box
      position="absolute"
      top={{ xs: 0, lg: -75 }}
      right={{ md: -230, lg: -200 }}
      sx={{
        width: 570,
      }}
    >
      <Image
        src="/pictures/advantages/crown.png"
        alt=""
        width={824}
        height={831}
        layout="responsive"
      />
    </Box>
  );
};

export default Crown;
