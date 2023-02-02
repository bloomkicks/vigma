import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useRef } from "react";
import Arrow from "./Arrow";
import Reviews from "./Reviews";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const SectionReviews = () => {
  let length = 5;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const prevIndex = useRef<number>(0);
  // const isSlice = useMediaQuery("(min-width: 1200px)");

  function currentIndexChanger(isLeft: boolean): void {
    function changeIndex(i: number, isLeft: boolean, l: number): number {
      let result = isLeft ? i - 1 : i + 1;
      prevIndex.current = i;
      if (0 <= result && result <= l - 1) return result;
      return i;
    }
    setCurrentIndex((prev) => changeIndex(prev, isLeft, length));
  }

  return (
    <Box component="article" id="reviews" sx={{ overflow: "hidden" }}>
      <Typography variant="h2">Отзывы клиентов</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 0.5, sm: 1.5, lg: 2 }}
      >
        <Arrow
          isLeft
          clickHandler={currentIndexChanger}
          currentIndex={currentIndex}
          length={length}
        />
        <Reviews
          currentIndex={currentIndex}
          prevIndex={prevIndex.current}
          slice={0}
        />
        <Arrow
          clickHandler={currentIndexChanger}
          currentIndex={currentIndex}
          length={length}
        />
      </Stack>
    </Box>
  );
};

export default SectionReviews;
