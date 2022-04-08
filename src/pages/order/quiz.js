import { useRouter } from "next/router";

import OrderContent from "../../components/order/OrderContent";
import Page from "../../components/layout/Page";
import allOrders from "../../storage/quiz-orders";

const OrderPage = (props) => {
  const router = useRouter();

  let content = allOrders.category;
  function getContent(tree, values) {
    content = allOrders[tree].bundle;
    for (let material of content.orders.filter((i) =>
      "frontbody".includes(i.name)
    )) {
      if (material.name === "front") {
        material.isFront = true;
      } else {
        material.isBody = true;
      }
    }
    if (!values || values.length === 0) {
      return;
    }

    getCurrent: {
      for (let value of values) {
        if (router.query[value] === "current") {
          content = allOrders[tree][value];
          break getCurrent;
        }
      }
      for (let value of ["front", "body"]) {
        if (router.query[value] === "current") {
          content = allOrders.materials[value];
          break getCurrent;
        }
      }
    }
  }

  const category = router.query["category"];
  const queries = ["shape"];
  if (category === "kitchen") {
    queries.push("table");
  }
  if (
    [
      "kitchen",
      "closet",
      "child",
      "bath",
      "trade",
      "office",
    ].includes(category)
  ) {
    getContent(category, queries);
  }
  let allDone = true;
  for (let query of [...queries, "front", "body"]) {
    const real = router.query[query];
    if (real && real !== "current") {
    } else {
      allDone = false;
    }
  }

  if (allDone) {
    const url = `/order?${new URLSearchParams(
      router.query
    )}`;
    router.push(url);
  }

  return (
    <Page title="Заказать">
      <OrderContent {...content} />
    </Page>
  );
};

export default OrderPage;
