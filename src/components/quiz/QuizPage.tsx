import type { QuizState } from "../../types/quiz";
import KitchenConstructor from "./kitchen-constructor/KitchenConstructor";
import SizeForm from "./SizeForm";
import QuizOptionList from "./quiz-option-list/Index";
import kitchenQuestions from "../../data/quiz/kitchen-questions";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Page = ({
  currentQuestion,
  translatedQuestion,
  availableOptions,
  selectedOptions,
  indexOfQuestion,
  constructorQuestions,
}: Omit<QuizState, "answeredQuestions" | "connectWay">) => {
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
      }}
    >
      <GiftPaper
        amountOfQuestions={
          currentQuestion === "gift"
            ? 0
            : kitchenQuestions
            ? kitchenQuestions.length - indexOfQuestion - 1
            : undefined
        }
        currentQuestion={currentQuestion}
      />
      <Typography variant="h4" mb={3.5} align="center">
        {currentQuestion === "gift" ? undefined : translatedQuestion}
      </Typography>
      {currentQuestion === "constructor" ? (
        <KitchenConstructor
          questions={constructorQuestions}
          allQuestions={availableOptions}
        />
      ) : currentQuestion === "size" ? (
        <SizeForm />
      ) : (
        <QuizOptionList
          options={availableOptions}
          question={currentQuestion}
          selectedOptions={selectedOptions}
        />
      )}
      <Actions
        backDisabled={["gift"].includes(currentQuestion)}
        nextDisabled={selectedOptions.length < 0}
        isDalee={
          selectedOptions.length > 0 ||
          currentQuestion === "size" ||
          (currentQuestion === "constructor" &&
            !!constructorQuestions["dishwasher"])
        }
      />
    </Stack>
  );
};

export default Page;
