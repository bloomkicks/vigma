import Image from "next/image";
import Box from "@mui/material/Box";

const ReviewPhoto = ({ imgSrc, sx }: { imgSrc: string; sx?: any }) => {
  return (
    <Box
      height={{ xs: 510, md: 700 }}
      width={{ xs: 253.9, md: 348.5 }}
      className="invisible"
    >
      <Image
        src={imgSrc}
        alt="Не удалось найти изображение. Попробуйте позже"
        width={348.5}
        height={700}
        layout="fill"
      />
    </Box>
  );
};

export default ReviewPhoto;
