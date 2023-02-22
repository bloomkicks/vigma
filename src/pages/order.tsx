import useForm from "../hooks/use-form";
import ContactInfoDialogs from "../components/contact-form/ContactInfoDialogs";
import OrderHead from "../components/layout/head-components/OrderHead";
import type { RootState } from "../store";
import { quizActions } from "../store/quiz";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

import OrderForm from "../components/quiz/order-form/OrderForm";
import PageQuiz from "../components/quiz/PageQuiz";
import Box from "@mui/material/Box";

const OrderPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const quiz = useSelector((state: RootState) => state.quiz);

  function closeHandler() {
    dispatch(quizActions.clear());
    router.push("/main");
  }

  return (
    <>
      <OrderHead />
      <Box pt={2} width="100%">
        {quiz.isFinished ? (
          <OrderForm quiz={quiz} onClose={closeHandler} />
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
      </Box>
    </>
  );
};

export default OrderPage;
