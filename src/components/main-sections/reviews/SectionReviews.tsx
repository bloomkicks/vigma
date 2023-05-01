import dynamic from "next/dynamic";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Arrow from "./Arrow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SliderSkeleton from "./SliderSkeleton";

const ReviewsSlider = dynamic(() => import("./ReviewsSlider"), {
  loading: SliderSkeleton,
});
// const ReviewsSlider = SliderSkeleton;

const SectionReviews = () => {
  let length = 8;
  const [reviewIndex, setReviewIndex] = useState<number>(0);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  let slice = isDesktop ? 1 : 0;

  function currentIndexChanger(isLeft: boolean): void {
    function changeIndex(i: number, isLeft: boolean, l: number): number {
      let result = isLeft ? i - 1 : i + 1;
      if (0 <= result && result <= l - 1 - slice) return result;
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
        spacing={{ xs: 0.25, sm: 1.75, lg: 2.25 }}
      >
        <Arrow
          isLeft
          clickHandler={currentIndexChanger}
          reviewIndex={reviewIndex}
          length={length}
          slice={slice}
        />
        <ReviewsSlider reviewIndex={reviewIndex} slice={slice} />
        <Arrow
          clickHandler={currentIndexChanger}
          reviewIndex={reviewIndex}
          length={length}
          slice={slice}
        />
      </Stack>
    </Box>
  );
};

export default SectionReviews;
