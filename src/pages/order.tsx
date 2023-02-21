import OrderHead from "../components/layout/head-components/OrderHead";
import type { RootState } from "../store";
import { quizActions } from "../store/quiz";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

import SuccessDialog from "../components/quiz/dialogs/SuccessDialog";
import ErrorDialog from "../components/quiz/dialogs/ErrorDialog";
import OrderForm from "../components/quiz/order-form/OrderForm";
import PageQuiz from "../components/quiz/PageQuiz";
import Box from "@mui/material/Box";

const OrderPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setIsError] = useState(null);
  const quiz = useSelector((state: RootState) => state.quiz);
  function successHandler() {
    setIsSuccess(true);
  }
  function errorHandler(err) {
    setIsError(err);
  }

  function closeHandler() {
    dispatch(quizActions.clear());
    setIsError(null);
    setIsSuccess(false);
    router.push("/main");
  }

  return (
    <>
      <OrderHead />
      <Box pt={2} width="100%">
        {quiz.isFinished ? (
          <OrderForm
            quiz={quiz}
            onSuccess={successHandler}
            onError={errorHandler}
          />
        ) : (
          <PageQuiz
            currentQuestion={quiz.currentQuestion}
            translatedQuestion={quiz.translatedQuestion}
            availableOptions={quiz.availableOptions}
            isFinished={quiz.isFinished}
            selectedOptions={quiz.selectedOptions}
            indexOfQuestion={quiz.indexOfQuestion}
            constructorQuestions={quiz.constructorQuestions}
          />
        )}
        <ErrorDialog error={error} closeHandler={closeHandler} />
        <SuccessDialog isSuccess={isSuccess} closeHandler={closeHandler} />
      </Box>
    </>
  );
};

export default OrderPage;
