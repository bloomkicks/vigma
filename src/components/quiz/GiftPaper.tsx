import { useEffect } from "react";
import { quizAssetsPath } from "../../data/general/assets-paths";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import getFormOfQuestions from "../../features/quiz/get-form-of-questions";

const GiftPaper = ({ amountOfQuestions }: { amountOfQuestions: number }) => {
  const isKnown = typeof amountOfQuestions === "number";
  const isGift = amountOfQuestions === 0;
  const questions = getFormOfQuestions(amountOfQuestions);

  useEffect(() => {
    const giftPaper = document.getElementById("gift-paper");

    giftPaper.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [amountOfQuestions]);

  return (
    <Paper
      id="gift-paper"
      sx={{
        mb: isGift ? 2 : 5,
        height: {
          xs: "120px",
          sm: "150px",
          md: "180px",
        },
        width: "100%",
        px: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={`${quizAssetsPath}/giftpaper.jpg`}
        alt=""
        position="absolute"
        height="100%"
        width="100%"
        left="0"
        top="0"
      ></Box>
      <Typography
        variant="h2"
        align="center"
        display="inline-block"
        position="relative"
        sx={{
          textTransform: "uppercase",
          color: "#fff",
          fontFamily: "Rubik, sans-serif",
          fontSize: { xs: 17, sm: 25, md: 35 },
          top: isKnown && !isGift ? { xs: 5, sm: 10 } : 0,
        }}
      >
        {!isKnown ? (
          "Узнайте стоимость и получите подарок"
        ) : isGift ? (
          <>
            Выбирете ваш{" "}
            <Box component="span" color="primary.light">
              подарок
            </Box>
          </>
        ) : (
          <>
            ДО ПОДАРКА ОСТАЛОСЬ:
            <br />
            <Box component="span">
              <Box
                component="span"
                sx={{
                  fontSize: { xs: 34, sm: 50, md: 70 },
                  color: "secondary.main",
                  verticalAlign: "middle",
                }}
              >
                {amountOfQuestions}
              </Box>
              <Box
                component="span"
                sx={{
                  verticalAlign: "middle",
                  color: "secondary.main",
                  ml: 1.1,
                  top: "1px",
                }}
              >
                {questions}
              </Box>
            </Box>
          </>
        )}
      </Typography>
    </Paper>
  );
};

export default GiftPaper;
