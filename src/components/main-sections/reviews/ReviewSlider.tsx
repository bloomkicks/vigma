import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const reviews = [
  {
    imgName: "Геннадий-Дальневосточный",
  },
  {
    imgName: "Ирина-Репищева",
  },
  {
    imgName: "Лидия-Александровна",
  },
  {
    imgName: "Наталья-Вавиловых",
  },
  {
    imgName: "Ольга-Тореза",
  },
  {
    imgName: "Александра+Ветеранов",
  },
  {
    imgName: "Нина+Денис",
  },
  {
    imgName: "Надежда+Конструкторов",
  },
];

const ReviewSlider = ({
  reviewIndex,
  slice,
}: {
  reviewIndex: number;
  slice: number;
}) => {
  let height = 700;
  let width = 348.5;
  let mobileHeight = 512.2;
  let mobileWidth = 255;

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      flexShrink={0}
      height={{ xs: mobileHeight + 3, md: height + 3 }}
      minWidth={mobileWidth + 3}
      maxWidth="100vw"
      width={{
        xs: mobileWidth,
        md: slice == 0 ? width : width * (slice + 1) + 19 * slice,
      }}
      spacing={2}
      sx={{ overflow: "hidden" }}
    >
      {reviews.map((review) => {
        const imgSrc = process.env.REVIEWS_ASSETS + "/" + review.imgName;
        return (
          <Box
            component="img"
            alt="Изображение не найдено. Попробуйте обновить страницу"
            src={imgSrc + ".jpg"}
            srcSet={`${imgSrc}.jpg 349w, ${imgSrc}-sm.jpg 255w`}
            sizes={`
            (max-width: 901px) 255px,
            349px
          `}
            sx={{
              transform: {
                xs: `translateX(-${reviewIndex * (mobileWidth + 13)}px)`,
                md: `translateX(-${reviewIndex * (width + 13)}px)`,
              },
              transition: "transform 0.3s ease-out",
              boxShadow: "1px 3px 3px rgba(0,0,0,0.25)",
            }}
            width={{ xs: mobileWidth - 3, md: width - 3 }}
            key={review.imgName}
          />
        );
      })}
    </Stack>
  );
};

export default ReviewSlider;
