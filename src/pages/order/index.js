import { useRouter } from "next/router";

import TotalOrderForm from "../../components/total order/TotalOrderForm";
import TotalOrderTree from "../../components/total order/TotalOrderTree";
import orderTranslations from "../../storage/order-translations";
import Page from "../../components/layout/Page";
import classes from "./TotalOrderPage.module.css";

const TotalOrderPage = (props) => {
  const router = useRouter();
  const item = router.query.item;

  let orderInfo;
  if (!item) {
    orderInfo = [
      {
        key: "Категория",
        property: orderTranslations.type[router.query.type],
      },
      {
        key: "Форма",
        property:
          orderTranslations.shape[router.query.shape],
      },
      {
        key: "Материалы",
        property: (router.query.material || "")
          .split("+")
          .map((query) => orderTranslations.material[query])
          .join(" + "),
      },
    ];
  }

  return (
    <Page
      title="Заказать"
      className={classes.TotalOrderPage}
    >
      <TotalOrderTree item={item} orderInfo={orderInfo} />
      <TotalOrderForm item={item} orderInfo={orderInfo} />
    </Page>
  );
};

export default TotalOrderPage;
