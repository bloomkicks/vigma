import { FlatQuestion } from "../../../data/quiz-questions";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import React from "react";

const List = ({
  answers,
  selectedAnswers,
}: {
  answers: (string | FlatQuestion<string>)[];
  selectedAnswers: (string | FlatQuestion<string>)[];
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
          <Item
            title={answer}
            isSelected={selectedAnswers.includes(answer)}
            key={answer.toString()}
          />
        );
      })}
    </Grid>
  );
};

export default List;
