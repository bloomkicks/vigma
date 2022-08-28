import { RootState } from "../../store";
import { useSelector } from "react-redux";

import List from "./quiz/List";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

const Page = () => {
  const quizState = useSelector(
    (state: RootState) => state.quiz
  );

  return (
    <Stack alignItems="center" sx={{ pt: 3 }}>
      <GiftPaper
        amountOfQuestions={
          (quizState.categoryQuestions
            ? quizState.categoryQuestions!.length
            : 2) - quizState.indexOfQuestion
        }
      />
      <Typography variant="h1" mb={1.5} align="center">
        {quizState.currentQuestion}
      </Typography>
      <List answers={quizState.availableAnswers} selectedAnswers={quizState.selectedAnswers} />
      <Actions indexOfQuestion={quizState.indexOfQuestion} />
    </Stack>
  );
};

export default Page;
