import kitchenQuestions from "../../../data/quiz/kitchen-questions";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import KitchenConstructor from "../../pages/order/kitchen-constructor/KitchenConstructor";
import SizeForm from "../../pages/order/SizeForm";
import ListQuizOption from "../../pages/order/quiz-option-list/ListQuizOption";
import GiftPaper from "../../pages/order/GiftPaper";
import Actions from "../../pages/order/Actions";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionMainQuiz = () => {
  const {
    currentQuestion,
    translatedQuestion,
    availableOptions,
    selectedOptions,
    indexOfQuestion,
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
              : kitchenQuestions
              ? kitchenQuestions.length - indexOfQuestion - 1
              : undefined
          }
          currentQuestion={currentQuestion}
        />
        <Typography variant="h4" mb={{ xs: 2.5, md: 3.5 }} align="center">
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
          <ListQuizOption
            key={currentQuestion}
            options={availableOptions}
            question={currentQuestion}
            selectedOptions={selectedOptions}
          />
        )}
        <Actions
          backDisabled={["gift"].includes(currentQuestion)}
          nextDisabled={selectedOptions.length < 0}
          onNextClick={
            currentQuestion === "gift" ? giftClickHandler : () => null
          }
          isDalee={
            selectedOptions.length > 0 ||
            currentQuestion === "size" ||
            (currentQuestion === "constructor" &&
              !!constructorQuestions["dishwasher"])
          }
        />
      </Stack>
    </Box>
  );
};

export default SectionMainQuiz;
