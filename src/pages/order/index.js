import { useRouter } from "next/router";

import TotalOrderForm from "../../components/total order/TotalOrderForm";
import TotalOrderTree from "../../components/total order/TotalOrderTree";
import orderTranslations from "../../storage/order-translations";
import Page from "../../components/layout/Page";
import classes from "./TotalOrderPage.module.css";

const TotalOrderPage = (props) => {
  const router = useRouter();
  const item = router.query.item;

  function translate(word) {
    return (
      orderTranslations[router.query[word]] ||
      router.query[word]
    );
  }

  let orderInfo;
  if (!item) {
    orderInfo = [
      {
        actual: "category",
        key: "Категория",
        property: translate("category"),
      },
      {
        actual: "shape",
        key: "Форма",
        property: translate("shape"),
      },
      {
        actual: "front",
        key: "Фасад",
        property: translate("front"),
      },
      {
        actual: "table",
        key: "Столешница",
        property: translate("tablet"),
      },
      {
        actual: "body",
        key: "Корпус",
        property: translate("body"),
      },
    ];
  }

  return (
    <Page
      title="Рассчитать"
      className={classes.TotalOrderPage}
    >
      <TotalOrderTree item={item} orderInfo={orderInfo} />
      <TotalOrderForm item={item} orderInfo={orderInfo} />
    </Page>
  );
};

export default TotalOrderPage;
