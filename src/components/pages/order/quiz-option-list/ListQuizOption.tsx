import type { QuizQuestion, QuizAnswer } from "../../../../types/quiz";
import getOptionImgSrc from "../../../../features/quiz/get-option-img-src";
import QuizOption from "./QuizOption";
import Grid from "@mui/material/Grid";
import React from "react";

const ListQuizOption = ({
  curQuestion,
  selectedOption,
}: {
  curQuestion: QuizQuestion;
  selectedOption: string;
}) => {
  return (
    <Grid
      container
      spacing={3}
      className="large-fading"
      alignItems="flex-start"
      justifyContent="center"
      sx={{ px: { xs: 1.2, sm: 3 }, maxWidth: "1200px" }}
    >
      {curQuestion.options!.map((option) => {
        const imgSrc = getOptionImgSrc("kitchen", curQuestion.question, option);

        return (
          <QuizOption
            option={option}
            isSelected={option === selectedOption}
            question={curQuestion.question}
            imgSrc={imgSrc}
            key={option.toString()}
          />
        );
      })}
      {"gift" !== curQuestion.question && (
        <QuizOption
          option="Помощь специалиста"
          isSelected={selectedOption === "Помощь специалиста"}
          question={curQuestion.question}
          imgSrc={`${process.env.QUIZ_ASSETS}/help.jpg`}
        />
      )}
    </Grid>
  );
};

export default ListQuizOption;
