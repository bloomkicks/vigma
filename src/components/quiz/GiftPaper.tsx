import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import getFormOfQuestions from "../../features/quiz/get-form-of-questions";

const giftFont = {
  fontFamily: "Rubik, Roboto, -apple-system, 'Open Sans', Raleway, sans-serif",
  letterSpacing: 0.2,
  fontWeight: 500,
  fontSize: { xs: 20, sm: 25, md: 35 },
};

const GiftPaper = ({
  amountOfQuestions,
  currentQuestion,
}: {
  amountOfQuestions: number;
  currentQuestion: string;
}) => {
  const isKnown = currentQuestion !== "shape";
  const isGift = currentQuestion === "gift";
  const questions = getFormOfQuestions(amountOfQuestions + 1);

  useEffect(() => {
    const giftPaper = document.getElementById("gift-paper");

    if (currentQuestion !== "shape") {
      giftPaper.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [amountOfQuestions]);

  return (
    <Paper
      id="gift-paper"
      sx={{
        mb: isGift ? 2 : 6,
        height: {
          xs: "120px",
          sm: "150px",
          md: "180px",
        },
        width: "100%",
        px: { xs: 4, md: 5 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={`${process.env.QUIZ_ASSETS}/giftpaper.jpg`}
        alt=""
        position="absolute"
        height="100%"
        width="100%"
        left="0"
        top="0"
      ></Box>
      <Typography
        variant="h2"
        textAlign="center"
        position="relative"
        sx={{
          textTransform: "uppercase",
          color: "secondary.main",
          fontSize: { xs: 20, sm: 25, md: 35 },
          top: isKnown && !isGift ? { xs: 5, sm: 10 } : 0,
          ...giftFont,
        }}
      >
        {!isKnown ? (
          "Узнайте стоимость и получите подарок"
        ) : isGift ? (
          <>
            Выбирете ваш{" "}
            <Typography
              variant="h2"
              fontSize={{ xs: 20, sm: 25, md: 35 }}
              component="span"
              color="primary.light"
              {...giftFont}
            >
              подарок
            </Typography>
          </>
        ) : (
          <>
            ДО ПОДАРКА ОСТАЛОСЬ:
            <br />
            <Typography component="span" display="block">
              <Typography
                component="span"
                variant="h2"
                sx={{
                  fontSize: { xs: 32, sm: 48, md: 68 },
                  fontFamily: giftFont.fontFamily,
                  color: "secondary.main",
                  verticalAlign: "middle",
                }}
              >
                {amountOfQuestions + 1}
              </Typography>
              <Typography
                component="span"
                variant="h2"
                sx={{
                  verticalAlign: "middle",
                  color: "secondary.main",
                  ml: { xs: 0.9, md: 1.1 },
                  top: "1px",
                  ...giftFont,
                }}
              >
                {questions}
              </Typography>
            </Typography>
          </>
        )}
      </Typography>
    </Paper>
  );
};

export default GiftPaper;
