import { FlatQuestion } from "../../../../types/quiz";
import Question from "./Question";
import Grid from "@mui/material/Grid";

const QuestionList = ({ questions }: { questions: FlatQuestion[] }) => {
  return (
    <Grid container spacing={4} sx={{ alignContent: "center" }}>
      {questions.map((question) => {
        const entry: [string, string[]] = Object.entries(question)[0];
        return (
          <Question question={entry[0]} radios={entry[1]} key={entry[0]} />
        );
      })}
    </Grid>
  );
};

export default QuestionList;
