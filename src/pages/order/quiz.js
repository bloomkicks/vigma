import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import QuizPage from "../../components/quiz/Page";
import { quizActions } from "../../store/quiz";
import Page from "../../components/layout/Page";

function stringQueries(queries) {
  let result = "";
  for (let query in queries) {
    let value = queries[query];
    if (value) {
      let symbol = result.length > 0 ? "&" : "?";
      result += symbol + query + "=" + value;
    }
  }

  return result;
}

const OrderPage = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  if (quiz.isFinished) {
    const queries = stringQueries(quiz.queries);
    router.push("/order" + queries);
    dispatch(quizActions.finish(false));
  }

  return (
    <Page title="Рассчитать">
      <QuizPage />
    </Page>
  );
};

export default OrderPage;
