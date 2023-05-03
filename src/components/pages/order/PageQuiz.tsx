import type { QuizAnswer, EquipmentAnswer } from "../../../types/quiz";
import { quizTranslations } from "../../../data/quiz/quiz-translations";
import quizQuestions from "../../../data/quiz/quiz-questions";
import type QuizState from "../../../types/quiz";
import KitchenConstructor from "./kitchen-constructor/KitchenConstructor";
import SizeForm from "./SizeForm";
import ListQuizOption from "./quiz-option-list/ListQuizOption";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const PageQuiz = ({
  curQuestion,
  curIndex,
  curAnswer,
  equipmentAnswers,
  onNextClick,
  sx,
}: QuizState & {
  curAnswer: QuizAnswer;
  equipmentAnswers: EquipmentAnswer[];
  answers?: null;
  onNextClick?: () => void;
  sx?: any;
}) => {
  const questionName = curQuestion.question;
  const translatedQuestion = quizTranslations[questionName];
  return (
    <Stack
      alignItems="center"
      sx={{
        pt: 3,
        maxWidth: "1366px",
        px: 2,
        width: "95%",
        mx: "auto",
        overflowX: "hidden",
        ...(sx || {}),
      }}
    >
      <GiftPaper
        amountOfQuestions={
          questionName === "gift" ? 0 : quizQuestions.length - curIndex - 1
        }
        questionName={questionName}
      />
      <Typography variant="h4" mb={{ xs: 2.5, md: 3.5 }} align="center">
        {questionName === "gift" ? undefined : translatedQuestion}
      </Typography>
      {questionName === "equipment" ? (
        <KitchenConstructor equipmentAnswers={equipmentAnswers} />
      ) : questionName === "size" ? (
        <SizeForm />
      ) : (
        <ListQuizOption
          curQuestion={curQuestion}
          selectedOption={curAnswer.selectedOption}
        />
      )}
      <Actions
        backDisabled={questionName === "gift"}
        nextDisabled={
          !curQuestion.options &&
          !["equipment", "size"].includes(curQuestion.question)
        }
        isDalee={
          !!curAnswer.selectedOption ||
          questionName === "size" ||
          (questionName === "equipment" &&
            !!equipmentAnswers[0].selectedVariant)
        }
        onNextClick={onNextClick}
      />
    </Stack>
  );
};

export default PageQuiz;
