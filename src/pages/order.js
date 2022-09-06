import { quizActions } from "../store/quiz";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import OrderForm from "../components/quiz/order-form/OrderForm";
import QuizPage from "../components/quiz/Page";
import Page from "../components/layout/Page";

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

  let isGiftSlelected =
    quiz.answeredQuestions[0] &&
    quiz.answeredQuestions[quiz.answeredQuestions.length - 1].hasOwnProperty(
      "gift",
    );

  return (
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
          selectedOptions={quiz.selectedOptions}
          indexOfQuestion={quiz.indexOfQuestion}
          categoryQuestions={quiz.categoryQuestions}
          constructorQuestions={quiz.constructorQuestions}
        />
      )}
      <Dialog open={isSuccess} onClose={closeHandler}>
        <DialogTitle sx={{ fontFamily: "Roboto, sans-serif", pb: 1 }}>
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
          sx={{ fontFamily: "Roboto, sans-serif", pb: 1 }}
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
  );
};

export default OrderPage;
