import { useRouter } from "next/router";

import OrderContent from "../../components/order/OrderContent";
import Page from "../../components/layout/Page";
import quizOrders from "../../storage/quiz-orders";


const OrderPage = (props) => {
  const router = useRouter();

  let content = {
    orders: quizOrders.starting,
    question: "Выбирете категорию мебель",
    title: null,
  };

  if (router.query["type"] === "kitchen" && !router.query["shape"]) {
    content = {
      orders: quizOrders.kitchen,
      question: "Выбирете форму кухни",
      title: "Кухня",
    };
  } else if (router.query["type"]) {
    content = {
      orders: quizOrders.materials,
      question: "Выбирете материалы",
      title: "Материалы",
    };
  }

  return (
    <Page title="Заказать">
      <OrderContent {...content} />
    </Page>
  );
};

export default OrderPage;
