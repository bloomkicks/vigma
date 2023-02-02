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
      sx={{ maxWidth: "90%", position: "relative", zIndex: 2 }}
    >
      {reviews.map((review, i) => (
        <CSSTransition
          in={i == currentIndex || i == currentIndex + slice}
          timeout={600}
          unmountOnExit
          classNames={{
            exit: isLeft ? "absolute fading-left" : "absolute fading-right",
            exitActive: "absolute",
            exitDone: "absolute",
          }}
          key={review.imgName + i}
        >
          <ReviewPhoto
            imgSrc={process.env.REVIEWS_ASSETS + "/" + review.imgName}
            sx={{
              position: "relative",
              zIndex: 3,
            }}
          />
        </CSSTransition>
      ))}
    </Stack>
  );
};

export default Reviews;
