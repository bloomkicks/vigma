import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import QuizPage from "../../components/quiz/Page"
import { quizActions } from "../../store/quiz";
import OrderContent from "../../components/order/OrderContent";
import Page from "../../components/layout/Page";
import allOrders from "../../storage/quiz-orders";

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

  const queries = stringQueries(quiz.queries);

  if (quiz.isFinished) {
    router.push("/order" + queries);
    dispatch(quizActions.finish(false));
  }

  let isInMaterials = "frontbody".includes(quiz.current);
  let content = isInMaterials
    ? allOrders.materials[quiz.current]
    : quiz.current
    ? allOrders[quiz.bundle][quiz.current]
    : quiz.bundle
    ? allOrders[quiz.bundle].bundle
    : allOrders.category;

  return (
    <Page title="Рассчитать">
      {/* <OrderContent {...content} /> */}
      <QuizPage />
    </Page>
  );
};

export default OrderPage;
