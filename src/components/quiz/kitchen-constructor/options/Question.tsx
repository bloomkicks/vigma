import { translateCategory } from "../../../../features/quiz/translate";
import { useDispatch } from "react-redux";
import { quizActions } from "../../../../store/quiz";

import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import RadioOption from "./RadioOption";

const Question = ({
  question,
  radios,
}: {
  question: string;
  radios: string[];
}) => {
  const dispatch = useDispatch();
  function selectOptionHandler(e, value: string) {
    const answer = {};
    answer[question] = value;
    dispatch(quizActions.selectConstructorOption(answer));
  }

  return (
    <Grid item>
      <Stack>
        <Typography variant="h4">{translateCategory(question)}</Typography>
        <RadioGroup onChange={selectOptionHandler}>
          {radios.map((radio) => {
            return <RadioOption value={radio} label={radio} key={radio} />;
          })}
        </RadioGroup>
      </Stack>
    </Grid>
  );
};

export default Question;
