import { useRouter } from "next/router";

import TotalOrderForm from "../../components/total order/TotalOrderForm";
import TotalOrderTree from "../../components/total order/TotalOrderTree";
import Page from "../../components/layout/Page";
import classes from "./TotalOrderPage.module.css";

const translations = {
  type: {
    kitchen: "Кухня",
    entry: "Шкаф",
    child: "Детская",
    "tc-island": "Торговый островок",
  },
  shape: {
    linear: "Прямая",
    angled: "Угловая",
    "u-shaped": "П-образная",
    others: "Другое",
  },
  material: {
    ldsp: "ЛДСП",
    mdf: "МДФ",
    massive: "Массив",
    others: "Другое",
  },
};

const TotalOrderPage = (props) => {
  const router = useRouter();

  const orderInfo = [
    { key: "Мебель", property: translations.type[router.query.type] },
    { key: "Форма", property: translations.shape[router.query.shape] },
    {
      key: "Материалы",
      property: (router.query.material || "")
        .split("+")
        .map((query) => translations.material[query])
        .join(" + "),
    },
  ];

  return (
    <Page title="Заказать" className={classes.TotalOrderPage}>
      {orderInfo[0].property && <TotalOrderTree orderInfo={orderInfo} />}
      <TotalOrderForm orderInfo={orderInfo} />
    </Page>
  );
};

export default TotalOrderPage;
