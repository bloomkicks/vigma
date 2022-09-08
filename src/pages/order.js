import Head from "next/head";
import { quizActions } from "../store/quiz";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import OrderForm from "../components/quiz/order-form/OrderForm";
import QuizPage from "../components/quiz/QuizPage";
import Page from "../components/layout/Page";

const title = process.env.ORDER_TITLE;
const description = process.env.ORDER_DESCRIPTION;

const OrderPage = () => {
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
      <Page>
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
        <Dialog open={isSuccess} onClose={closeHandler}>
          <DialogTitle sx={{ fontFamily: "Roboto, sans-serif", pb: 1, mt: 1 }}>
            Вы успешно отправили заявку на рассчет
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              В течении суток с вами свяжется наш консультант
            </Typography>
          </DialogContent>
        </Dialog>
        <Dialog open={!!error} onClose={closeHandler}>
          <DialogTitle
            color="error"
            sx={{ fontFamily: "Roboto, sans-serif", pb: 1, mt: 1 }}
          >
            Что-то пошло не так
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" color="error">
              Попробуйте позже <br />
              Ошибка: {error}
            </Typography>
          </DialogContent>
        </Dialog>
      </Page>
    </>
  );
};

export default OrderPage;
