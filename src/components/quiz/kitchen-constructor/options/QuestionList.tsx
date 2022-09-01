import { ConstructorQuestions } from "../../../../types/quiz";
import allConstructorQuestions from "../../../../data/quiz/constructor-questions";
import Question from "./Question";
import Grid from "@mui/material/Grid";

const QuestionList = ({ questions }: { questions: ConstructorQuestions }) => {
  return (
    <Grid container spacing={4} sx={{ alignContent: "center" }}>
      {Object.keys(questions).map((question) => {
        const availableOptions = allConstructorQuestions.find((flatQuestion) =>
          flatQuestion.hasOwnProperty(question),
        )[question];
        return (
          <Question
            question={question}
            radios={availableOptions}
            key={question}
          />
        );
      })}
    </Grid>
  );
};

export default QuestionList;
