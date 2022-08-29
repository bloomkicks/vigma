import { RootState } from "../../store";
import { useSelector } from "react-redux";

import OptionList from "./options/OptionList";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

const Page = () => {
  const quizState = useSelector((state: RootState) => state.quiz);

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
      <OptionList
        answers={quizState.availableOptions}
        category={quizState.category}
        question={quizState.currentQuestion}
        selectedAnswers={quizState.selectedOptions}
      />
      <Actions indexOfQuestion={quizState.indexOfQuestion} />
    </Stack>
  );
};

export default Page;
