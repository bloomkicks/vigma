import Image from "next/image";
import Box from "@mui/material/Box";

const ReviewPhoto = ({ imgSrc, sx }: { imgSrc: string; sx: any }) => {
  return (
    <Box
      height={{ xs: 600, md: 700 }}
      width={{ xs: 291.1, md: 339.6 }}
      position="relative"
      sx={{
        boxShadow: "0.5px 2px 5px 2px rgba(0,0,0,25%)",
        ...sx,
      }}
    >
      <Image src={imgSrc} width={473} height={975} layout="fill" />
    </Box>
  );
};

export default ReviewPhoto;
