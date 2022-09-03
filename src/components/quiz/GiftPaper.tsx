import { quizAssetsPath } from "../../data/general/assets-paths";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const GiftPaper = ({
  amountOfQuestions = 5,
}: {
  amountOfQuestions: number;
}) => {
  let questions = "вопросов";
  switch (amountOfQuestions) {
    case 1:
      questions = "вопрос";
      break;
    case 2:
    case 3:
    case 4:
      questions = "вопроса";
      break;
  }
  return (
    <Paper
      sx={{
        boxShadow: "none",
        px: 2,
        mb: 3,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.dark",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        display="inline-block"
        sx={{ textTransform: "uppercase", fontWeight: "400", color: "#fff" }}
      >
        до подарка осталось:
        <Typography variant="inherit" sx={{ fontWeight: "bold" }}>
          {amountOfQuestions} {questions}
        </Typography>
      </Typography>
      <Box
        component={() => (
          <Image
            src={`${quizAssetsPath}/gift.png`}
            alt=""
            width="120"
            height="120"
          />
        )}
        position="relative"
        left="150"
      ></Box>
    </Paper>
  );
};

export default GiftPaper;
