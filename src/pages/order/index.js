import { useRouter } from "next/router";

import TotalOrderForm from "../../components/total order/TotalOrderForm";
import TotalOrderTree from "../../components/total order/TotalOrderTree";
import Page from "../../components/layout/Page";
import classes from "./TotalOrderPage.module.css";

const translations = {
  room: {
    office: "Офис",
    kitchen: "Кухня",
    bedroom: "Спальная",
    others: "Другое",
  },
  type: {
    desk: "Столы",
    chair: "Стулья",
    cabinet: "Тумбы",
    linear: "Прямая",
    angled: "Угловая",
    "u-shaped": "П-образная",
    bed: "Кровать",
    closet: "Шкаф",
    sofa: "Диван",
    bathroom: "Ванная",
    entryway: "Прихожая",
    "tc-island": "Торговый островок",
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
    { key: "Комната", property: translations.room[router.query.room] },
    { key: "Мебель", property: translations.type[router.query.type] },
    {
      key: "Материалы",
      property: (router.query.material || "")
        .split(" ")
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
