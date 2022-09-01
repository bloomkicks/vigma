import { ConstructorQuestions } from "../../../types/quiz";

import Stack from "@mui/material/Stack";

import KitchenDisplay from "./KitchenDisplay";
import QuestionList from "./options/QuestionList";

const KitchenConstructor = ({ questions }: { questions: ConstructorQuestions }) => {
  return (
    <Stack alignItems="center">
      <KitchenDisplay />
      <QuestionList questions={questions} />
    </Stack>
  );
};

export default KitchenConstructor;
