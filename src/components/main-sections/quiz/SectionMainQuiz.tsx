import type { RootState } from "../../../store";
import PageQuiz from "../../pages/order/PageQuiz";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

const SectionMainQuiz = () => {
  const quizState = useSelector((state: RootState) => state.quiz);
  const router = useRouter();
  function giftClickHandler() {
    router.push("/order");
  }
  return (
    <Box component="article" id="quiz" pt={2} width="100%">
      <PageQuiz
        curQuestion={quizState.curQuestion}
        curIndex={quizState.curIndex}
        curAnswer={quizState.answers[quizState.curIndex]}
        equipmentAnswers={quizState.answers[1].equipmentAnswers}
        answers={null}
        onNextClick={
          quizState.curQuestion.question === "gift"
            ? giftClickHandler
            : () => null
        }
        sx={{
          pt: 0,
        }}
      />
    </Box>
  );
};
export default SectionMainQuiz;
