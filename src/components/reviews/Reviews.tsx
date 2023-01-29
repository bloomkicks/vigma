import ItemReview from "./ItemReview";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Review } from "../../types/reviews";

let reviews: Review[] = [
  {
    title: "Быстро и чисто",
    imgSrc: "anna.jpg",
    rating: 5,
    text: "Я заказывала рабочую зону со шкафами. Мастера приехали, все померили, заключили договор. После установили шкафов за собой все убрали. Мы довольны и выражаем огромную благодарность! Вы делаете людей счастливее) Спасибо!",
  },
  {
    title: "Настоящие профи",
    imgSrc: "igor.jpg",
    rating: 5,
    text: "Отличные специалисты своего дела, настоящие профи, я очень рад, что не ошибся в выборе этой мебельной компании. Всё чётко, по договорённости, аккуратно и добротно, без кривизны и без царапин! И даже раньше чем в договоре, на целых две недели! Желаю вам успехов в работе!",
  },
  {
    title: "Справились на отлично",
    imgSrc: "liya.jpg",
    rating: 4,
    text: "Изготовили и установили мебель на лоджию (шкаф и тумбу), задание было непростое) Справились на отлично! Спасибо!",
  },
];

const Reviews = () => {
  return (
    <Box component="article" id="reviews">
      <Typography variant="h2">Отзывы клиентов</Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 4, lg: 3, xl: 4 }}
        ml={{ xs: 0, md: -4, lg: -3, xl: -4 }}
        flexWrap={{ xs: "wrap", lg: "nowrap" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent="center"
      >
        {reviews.map((review, i, a) => {
          let isLast = i == a.length - 1;

          return (
            <ItemReview
              {...review}
              sx={{
                "&": {
                  ml: { md: isLast ? 0 : 3, xl: 3 },
                  mt: {
                    md: isLast ? "24px !important" : 0,
                    lg: "0 !important",
                  },
                },
              }}
              key={review.title + i}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Reviews;
