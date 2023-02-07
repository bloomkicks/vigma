import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import KitchenConstructor from "../quiz/kitchen-constructor/KitchenConstructor";
import SizeForm from "../quiz/SizeForm";
import QuizOptionList from "../quiz/quiz-option-list/Index";
import GiftPaper from "../quiz/GiftPaper";
import Actions from "../quiz/Actions";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionMainQuiz = () => {
  const {
    currentQuestion,
    translatedQuestion,
    availableOptions,
    category,
    selectedOptions,
    indexOfQuestion,
    categoryQuestions,
    constructorQuestions,
  } = useSelector((state: RootState) => state.quiz);
  const router = useRouter();
  function giftClickHandler() {
    router.push("/order");
  }

  return (
    <Box component="article" id="quiz" pt={2} width="100%">
      <Stack
        alignItems="center"
        sx={{
          maxWidth: "1366px",
          px: 2,
          width: "95%",
          mx: "auto",
          overflowX: "hidden",
          textAlign: "left",
        }}
      >
        <GiftPaper
          amountOfQuestions={
            currentQuestion === "gift"
              ? 0
              : categoryQuestions
              ? categoryQuestions!.length - indexOfQuestion - 1
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
            key={category + currentQuestion}
            options={availableOptions}
            category={category}
            question={currentQuestion}
            selectedOptions={selectedOptions}
          />
        )}
        <Actions
          backDisabled={
            (!category && currentQuestion === "category") ||
            ["gift"].includes(currentQuestion)
          }
          nextDisabled={
            selectedOptions.length < 1 && currentQuestion === "category"
          }
          onNextClick={
            currentQuestion === "gift" ? giftClickHandler : () => null
          }
          isDalee={
            selectedOptions.length > 0 ||
            currentQuestion === "size" ||
            (currentQuestion === "constructor" &&
              !!constructorQuestions["dishwasher"]) ||
            currentQuestion === "category"
          }
        />
      </Stack>
    </Box>
  );
};

export default SectionMainQuiz;
