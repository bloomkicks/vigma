import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useRef } from "react";
import Arrow from "./Arrow";
import Reviews from "./Reviews";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const SectionReviews = () => {
  let length = 8;
  const [reviewIndex, setReviewIndex] = useState<number>(0);
  const prevReviewIndex = useRef<number>(0);
  // const isSlice = useMediaQuery("(min-width: 1200px)");

  function currentIndexChanger(isLeft: boolean): void {
    function changeIndex(i: number, isLeft: boolean, l: number): number {
      let result = isLeft ? i - 1 : i + 1;
      prevReviewIndex.current = i;
      if (0 <= result && result <= l - 1) return result;
      return i;
    }
    setReviewIndex((prev) => changeIndex(prev, isLeft, length));
  }

  return (
    <Box component="article" id="reviews" sx={{ overflow: "hidden" }}>
      <Typography variant="h2">Отзывы заказчиков</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 0.1, sm: 1.75, lg: 2.25 }}
      >
        <Arrow
          isLeft
          clickHandler={currentIndexChanger}
          reviewIndex={reviewIndex}
          length={length}
        />
        <Reviews
          reviewIndex={reviewIndex}
          prevReviewIndex={prevReviewIndex.current}
          slice={0}
        />
        <Arrow
          clickHandler={currentIndexChanger}
          reviewIndex={reviewIndex}
          length={length}
        />
      </Stack>
    </Box>
  );
};

export default SectionReviews;
