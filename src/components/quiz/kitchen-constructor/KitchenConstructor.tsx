import { ConstructorQuestions } from "../../../types/quiz";

import Stack from "@mui/material/Stack";

import KitchenDisplay from "./KitchenDisplay";
import QuestionList from "./options/QuestionList";

const KitchenConstructor = ({
  questions,
  allQuestions,
}: {
  questions: ConstructorQuestions;
  allQuestions: string[];
}) => {
  return (
    <Stack alignItems="center" sx={{ maxWidth: "1366px" }}>
      <KitchenDisplay />
      <QuestionList questions={questions} allQuestions={allQuestions} />
    </Stack>
  );
};

export default KitchenConstructor;
