import getImgSrc from "../../../features/quiz/get-img-src";
import { FlatQuestion, Category } from "../../../types/quiz";
import Option from "./Option";
import Grid from "@mui/material/Grid";
import React from "react";

const OptionList = ({
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
      rowSpacing={{ xs: 2, sm: 3 }}
      columnSpacing={3}
      justifyContent="center"
      sx={{ mb: 3, px: { xs: 1.2, sm: 3 } }}
    >
      {options.map((option) => {
        const imgSrc = getImgSrc(category, question, option);

        return (
          <Option
            option={option}
            category={category}
            isSelected={selectedOptions.includes(option)}
            question={question}
            imgSrc={imgSrc}
            key={option.toString()}
          />
        );
      })}
    </Grid>
  );
};

export default OptionList;
