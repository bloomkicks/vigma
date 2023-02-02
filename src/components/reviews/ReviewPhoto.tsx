import Image from "next/image";
import Box from "@mui/material/Box";

const ReviewPhoto = ({ imgSrc, sx }: { imgSrc: string; sx: any }) => {
  return (
    <Box
      height={{ xs: 550, md: 700 }}
      width={{ xs: 266.8, md: 339.6 }}
      className="invisible"
      sx={{
        ...sx,
      }}
    >
      <Image src={imgSrc} width={473} height={975} layout="fill" />
    </Box>
  );
};

export default ReviewPhoto;
