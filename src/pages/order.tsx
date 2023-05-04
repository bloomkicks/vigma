import QuizState from "../types/quiz";
import type { RootState } from "../store";
import OrderHead from "../components/layout/head-components/OrderHead";
import { useSelector, useDispatch } from "react-redux";
import quizActions from "../store/quiz-slice";
import { useRouter } from "next/router";

import OrderForm from "../components/pages/order-form/OrderForm";
import QuizPage from "../components/pages/quiz/QuizPage";
import Box from "@mui/material/Box";

const OrderPage = () => {
  const dispatch = useDispatch();
  const quizState: QuizState = useSelector((state: RootState) => state.quiz);
  const router = useRouter();

  function closeHandler() {
    dispatch(quizActions.clear());
    router.push("/main");
  }

  return (
    <>
      <OrderHead />
      <Box pt={2} width="100%">
        {quizState.isFinished ? (
          <OrderForm
            answers={quizState.answers}
            onClose={closeHandler}
            product={quizState.product}
          />
        ) : (
          <QuizPage
            curQuestion={quizState.curQuestion}
            curIndex={quizState.curIndex}
            curAnswer={quizState.answers[quizState.curIndex]}
            equipmentAnswers={quizState.answers[1].equipmentAnswers}
            answers={null}
          />
        )}
      </Box>
    </>
  );
};

export default OrderPage;
