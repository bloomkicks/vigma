import dynamic from "next/dynamic";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import SliderArrow from "../reviews/SliderArrow";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SliderSkeleton from "./SliderSkeleton";

const CertificatesSlider = dynamic(() => import("./CertificatesSlider"), {
  loading: SliderSkeleton,
});
// const CertificatesSlider = SliderSkeleton;

const Certificates = () => {
  let length = 4;
  const [certifIndex, setCertifIndex] = useState<number>(0);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isSmall = useMediaQuery("(max-width: 376px)");
  let slice = isDesktop ? 1 : 0;

  function currentIndexChanger(isLeft: boolean): void {
    function changeIndex(i: number, isLeft: boolean, l: number): number {
      let result = isLeft ? i - 1 : i + 1;
      if (0 <= result && result <= l - 1 - slice) return result;
      return i;
    }
    setCertifIndex((prev) => changeIndex(prev, isLeft, length));
  }
  return (
    <Box component="article" id="certificates">
      <Typography variant="h2">Сертификаты на материалы</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={isSmall ? 0.2 : { xs: 0.8, sm: 1.75, lg: 2.25 }}
      >
        <SliderArrow
          isLeft
          clickHandler={currentIndexChanger}
          reviewIndex={certifIndex}
          length={length}
          slice={slice}
        />
        <CertificatesSlider certifIndex={certifIndex} slice={slice} />
        <SliderArrow
          clickHandler={currentIndexChanger}
          reviewIndex={certifIndex}
          length={length}
          slice={slice}
        />
      </Stack>
    </Box>
  );
};

export default Certificates;
