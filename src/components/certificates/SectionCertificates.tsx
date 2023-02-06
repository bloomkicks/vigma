import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Arrow from "../reviews/Arrow";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CertificatesSlider from "./CertificatesSlider";

const Certificates = () => {
  let length = 4;
  const [certifIndex, setCertifIndex] = useState<number>(0);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
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
      <Typography variant="h2">Сертификаты качества</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 0.1, sm: 1.75, lg: 2.25 }}
      >
        <Arrow
          isLeft
          clickHandler={currentIndexChanger}
          reviewIndex={certifIndex}
          length={length}
          slice={slice}
        />
        <CertificatesSlider certifIndex={certifIndex} slice={slice} />
        <Arrow
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
