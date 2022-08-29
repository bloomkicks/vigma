import { FlatQuestion, Category } from "../../../models/quiz";
import Option from "./Option";
import Grid from "@mui/material/Grid";
import React from "react";

const OptionList = ({
  options,
  selectedOptions,
  category,
  question,
}: {
  options: (string | FlatQuestion<string>)[];
  selectedOptions: (string | FlatQuestion<string>)[];
  category: Category;
  question: string;
}) => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 3 }}
      columnSpacing={3}
      justifyContent="center"
      sx={{ mb: 3, px: { xs: 1.2, sm: 3 } }}
    >
      {options.map((answer) => {
        return (
          <Option
            title={answer}
            isSelected={selectedOptions.includes(answer)}
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
