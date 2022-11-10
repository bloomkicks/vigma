import getOptionImgSrc from "../../../features/quiz/get-option-img-src";
import { Category } from "../../../types/quiz";
import QuizOption from "./QuizOption";
import Grid from "@mui/material/Grid";
import React from "react";

const QuizOptionList = ({
  options,
  selectedOptions,
  category,
  question,
}: {
  options: string[];
  selectedOptions: string[];
  category: Category;
  question: string;
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
      {options.map((option) => {
        const imgSrc = getOptionImgSrc(category, question, option);

        return (
          <QuizOption
            option={option}
            category={category}
            isSelected={selectedOptions.includes(option)}
            question={question}
            imgSrc={imgSrc}
            key={option.toString()}
          />
        );
      })}
      {!["category", "gift"].includes(question) && (
        <QuizOption
          option="Помощь специалиста"
          category={category}
          isSelected={selectedOptions.includes("Помощь специалиста")}
          question={question}
          imgSrc={`${process.env.QUIZ_ASSETS}/help.jpg`}
        />
      )}
    </Grid>
  );
};

export default QuizOptionList;
