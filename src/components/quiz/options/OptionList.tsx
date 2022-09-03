import getImgSrc from "../../../features/quiz/get-img-src";
import { Category } from "../../../types/quiz";
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
      spacing={3}
      alignItems="flex-start"
      justifyContent="center"
      sx={{ px: { xs: 1.2, sm: 3 }, maxWidth: "1200px" }}
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
