import KitchenConstructor from "./kitchen-constructor/KitchenConstructor";
import SizeQuestion from "./SizeQuestion";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

import OptionList from "./options/OptionList";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Page = () => {
  const quizState = useSelector((state: RootState) => state.quiz);

  return (
    <Stack alignItems="center" sx={{ pt: 3, maxWidth: "1366px", px: 2 }}>
      <GiftPaper
        amountOfQuestions={
          (quizState.categoryQuestions
            ? quizState.categoryQuestions!.length
            : 2) - quizState.indexOfQuestion
        }
      />
      <Typography variant="h1" mb={3.5} align="center">
        {quizState.translatedQuestion}
      </Typography>
      {quizState.currentQuestion === "constructor" ? (
        <KitchenConstructor
          questions={quizState.constructorQuestions}
          allQuestions={quizState.availableOptions}
        />
      ) : quizState.currentQuestion === "size" ? (
        <SizeQuestion />
      ) : (
        <OptionList
          options={quizState.availableOptions}
          category={quizState.category}
          question={quizState.currentQuestion}
          selectedOptions={quizState.selectedOptions}
        />
      )}
      <Actions
        indexOfQuestion={quizState.indexOfQuestion}
        disabled={
          quizState.selectedOptions.length < 1 &&
          quizState.currentQuestion === "category"
        }
        isDalee={
          quizState.selectedOptions.length > 0 ||
          (quizState.currentQuestion === "constructor" &&
            !!quizState.constructorQuestions["dishwasher"]) ||
          quizState.currentQuestion === "category"
        }
      />
    </Stack>
  );
};

export default Page;
