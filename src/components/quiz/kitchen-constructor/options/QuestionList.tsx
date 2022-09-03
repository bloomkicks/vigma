import { ConstructorQuestions } from "../../../../types/quiz";
import allConstructorQuestions from "../../../../data/quiz/constructor-questions";
import Question from "./Question";
import Grid from "@mui/material/Grid";

const QuestionList = ({
  questions,
  allQuestions,
}: {
  questions: ConstructorQuestions;
  allQuestions: string[];
}) => {
  return (
    <Grid container spacing={4} sx={{ alignContent: "center" }}>
      {allQuestions
        .filter((question) => questions[question] !== undefined)
        .map((question) => {
          const availableOptions = allConstructorQuestions.find(
            (flatQuestion) => flatQuestion.hasOwnProperty(question),
          )[question];

          return (
            <Question
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

export default QuestionList;
