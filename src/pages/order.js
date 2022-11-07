import Head from "next/head";
import { quizActions } from "../store/quiz";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

import SuccessDialog from "../components/quiz/order-form/SuccessDialog";
import ErrorDialog from "../components/quiz/order-form/ErrorDialog";
import OrderForm from "../components/quiz/order-form/OrderForm";
import QuizPage from "../components/quiz/QuizPage";
import Box from "@mui/material/Box";
// import Page from "../components/layout/Page";

const title = process.env.ORDER_TITLE;
const description = process.env.ORDER_DESCRIPTION;

const OrderPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setIsError] = useState(null);
  const quiz = useSelector((state) => state.quiz);
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
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        {/* OPEN GRAPH */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* TWITTER */}
        <meta name="twitter:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <Box pt={2} width="100%">
        {quiz.isFinished ? (
          <OrderForm
            quizState={quiz}
            onSuccess={successHandler}
            onError={errorHandler}
          />
        ) : (
          <QuizPage
            currentQuestion={quiz.currentQuestion}
            translatedQuestion={quiz.translatedQuestion}
            availableOptions={quiz.availableOptions}
            category={quiz.category}
            isGift={quiz.isGift}
            isFinished={quiz.isFinished}
            selectedOptions={quiz.selectedOptions}
            indexOfQuestion={quiz.indexOfQuestion}
            categoryQuestions={quiz.categoryQuestions}
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
