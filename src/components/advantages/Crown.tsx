import Image from "next/image";
import Box from "@mui/material/Box";

const Crown = () => {
  return (
    <Box
      position="absolute"
      right="0"
      top="-20px"
      sx={{
        width: 350,
      }}
    >
      <Image
        src="/pictures/advantages/crown.png"
        alt=""
        width={533}
        height={858}
        layout="responsive"
      />
    </Box>
  );
};

export default Crown;
