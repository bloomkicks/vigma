import CSSTransition from "react-transition-group/CSSTransition";
import ReviewPhoto from "./ReviewPhoto";
import Stack from "@mui/material/Stack";

const reviews = [
  {
    imgName: "Геннадий-Дальневосточный.jpg",
  },
  {
    imgName: "Ирина-Репищева.jpg",
  },
  {
    imgName: "Лидия-Александровна.jpg",
  },
  {
    imgName: "Наталья-Вавиловых.jpg",
  },
  {
    imgName: "Ольга-Тореза.jpg",
  },
];

const Reviews = ({
  currentIndex,
  prevIndex,
  slice,
}: {
  currentIndex: number;
  prevIndex: number;
  slice: number;
}) => {
  let isSlice = slice > 0;
  let isLeft = currentIndex > prevIndex;
  return (
    <Stack
      direction="row"
      flexWrap="nowrap"
      justifyContent="center"
      alignItems="center"
      spacing={isSlice ? 3 : 0}
      minHeight={{ xs: 550, md: 700 }}
      minWidth={{ xs: 266.8, md: 339.6 }}
      sx={{
        maxWidth: "90%",
        zIndex: 2,
      }}
    >
      {reviews.map((review, i) => (
        <CSSTransition
          in={i == currentIndex || i == currentIndex + slice}
          timeout={{ appear: 0, enter: 400, exit: 500 }}
          appear
          classNames={{
            appearDone: "visible",
            enter: "visible",
            enterActive: isLeft
              ? "visible fading-in-right"
              : "visible fading-in-left",
            enterDone: "visible",
            exit: "invisible",
            exitActive: isLeft
              ? "invisible fading-left"
              : "invisible fading-right",
            exitDone: "invisible",
          }}
          key={review.imgName + i}
        >
          <ReviewPhoto
            imgSrc={process.env.REVIEWS_ASSETS + "/" + review.imgName}
            sx={{}}
          />
        </CSSTransition>
      ))}
    </Stack>
  );
};

export default Reviews;
