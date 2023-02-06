import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

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
  {
    imgName: "Александра+Ветеранов.jpg",
  },
  {
    imgName: "Нина+Денис.jpg",
  },
  {
    imgName: "Надежда+Конструкторов.jpg",
  },
];

const ReviewsSlider = ({
  reviewIndex,
  slice,
}: {
  reviewIndex: number;
  slice: number;
}) => {
  let height = 700;
  let width = 348.52;
  let mobileHeight = 510;
  let mobileWidth = 253.92;

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      height={{ xs: mobileHeight + 3, md: height + 3 }}
      width={{
        xs: mobileWidth,
        md: slice == 0 ? width : width * (slice + 1) + 19 * slice,
      }}
      spacing={2}
      sx={{ overflow: "hidden" }}
    >
      {reviews.map((review) => (
        <Box
          component="img"
          src={process.env.REVIEWS_ASSETS + "/" + review.imgName}
          sx={{
            transform: {
              xs: `translateX(-${reviewIndex * (mobileWidth + 16)}px)`,
              md: `translateX(-${reviewIndex * (width + 16)}px)`,
            },
            transition: "transform 0.3s ease-out",
            boxShadow: "2px 3px 3px rgba(0,0,0,0.25)",
          }}
          width={{ xs: mobileWidth, md: width }}
          // height="100%"
          key={review.imgName}
        />
      ))}
    </Stack>
  );
};

export default ReviewsSlider;
