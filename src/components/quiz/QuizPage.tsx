import KitchenConstructor from "./kitchen-constructor/KitchenConstructor";
import SizeQuestion from "./SizeQuestion";
import { Category, FlatQuestion, ConstructorQuestions } from "../../types/quiz";
import OptionList from "./options/OptionList";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import giftOptions from "../../data/quiz/gift-options";

const Page = ({
  currentQuestion,
  translatedQuestion,
  availableOptions,
  category,
  selectedOptions,
  indexOfQuestion,
  categoryQuestions,
  constructorQuestions,
}: {
  currentQuestion: string;
  translatedQuestion: string;
  availableOptions: string[];
  category: Category;
  selectedOptions: string[];
  indexOfQuestion: number;
  categoryQuestions: FlatQuestion[];
  constructorQuestions: ConstructorQuestions;
}) => {
  return (
    <Stack
      alignItems="center"
      sx={{ pt: 3, maxWidth: "1366px", px: 2, width: "95%" }}
    >
      <GiftPaper
        amountOfQuestions={
          currentQuestion === "gift"
            ? 0
            : categoryQuestions
            ? categoryQuestions!.length - indexOfQuestion - 1
            : undefined
        }
      />
      <Typography variant="h1" mb={3.5} align="center">
        {currentQuestion === "gift" ? undefined : translatedQuestion}
      </Typography>
      {currentQuestion === "constructor" ? (
        <KitchenConstructor
          questions={constructorQuestions}
          allQuestions={availableOptions}
        />
      ) : currentQuestion === "size" ? (
        <SizeQuestion />
      ) : (
        <OptionList
          key={category + currentQuestion}
          options={availableOptions}
          category={category}
          question={currentQuestion}
          selectedOptions={selectedOptions}
        />
      )}

      <Actions
        backDisabled={["category", "gift"].includes(currentQuestion)}
        nextDisabled={
          selectedOptions.length < 1 && currentQuestion === "category"
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
  );
};

export default Page;
