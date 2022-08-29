import { FlatQuestion, Category } from "../../../models/quiz";
import Option from "./Option";
import Grid from "@mui/material/Grid";
import React from "react";

const OptionList = ({
  answers,
  selectedAnswers,
  category,
  question,
}: {
  answers: (string | FlatQuestion<string>)[];
  selectedAnswers: (string | FlatQuestion<string>)[];
  category: Category;
  question: string;
}) => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 3 }}
      columnSpacing={3}
      justifyContent="center"
      sx={{ mb: 3, px: 1.2 }}
    >
      {answers.map((answer) => {
        return (
          <Option
            title={answer}
            isSelected={selectedAnswers.includes(answer)}
            category={category}
            question={question}
            key={answer.toString()}
          />
        );
      })}
    </Grid>
  );
};

export default OptionList;
