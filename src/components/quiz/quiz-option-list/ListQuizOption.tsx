import getOptionImgSrc from "../../../features/quiz/get-option-img-src";
import QuizOption from "./QuizOption";
import Grid from "@mui/material/Grid";
import React from "react";

const ListQuizOption = ({
  options,
  selectedOptions,
  question,
}: {
  options: string[];
  selectedOptions: string[];
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
        const imgSrc = getOptionImgSrc("kitchen", question, option);

        return (
          <QuizOption
            option={option}
            isSelected={selectedOptions.includes(option)}
            question={question}
            imgSrc={imgSrc}
            key={option.toString()}
          />
        );
      })}
      {"gift" !== question && (
        <QuizOption
          option="Помощь специалиста"
          isSelected={selectedOptions.includes("Помощь специалиста")}
          question={question}
          imgSrc={`${process.env.QUIZ_ASSETS}/help.jpg`}
        />
      )}
    </Grid>
  );
};

export default ListQuizOption;
