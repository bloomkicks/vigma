import { ConstructorQuestions } from "../../../../types/quiz";
import allConstructorQuestions from "../../../../data/quiz/constructor-questions";
import ConstructQuestion from "./ConstructQuestion";
import Grid from "@mui/material/Grid";

const ConstructQuestionList = ({
  questions,
  allQuestions,
}: {
  questions: ConstructorQuestions;
  allQuestions: string[];
}) => {
  return (
    <Grid
      container
      spacing={5}
      columnSpacing={{ xs: 3, sm: 4 }}
      sx={{
        mx: "auto",
        ml: { xs: "0px" },
        width: { xs: "fit-content" },
      }}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {allQuestions
        .filter((question) => questions[question] !== undefined)
        .map((question) => {
          const availableOptions = allConstructorQuestions.find(
            (flatQuestion) => flatQuestion.hasOwnProperty(question),
          )[question];

          return (
            <ConstructQuestion
              question={question}
              selected={questions[question]}
              radios={availableOptions}
              key={question}
            />
          );
        })}
    </Grid>
  );
};

export default ConstructQuestionList;
