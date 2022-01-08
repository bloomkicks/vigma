import { useRouter } from "next/router";

import OrderContent from "../../components/order/OrderContent";
import Page from "../../components/layout/Page";

// STARTING ORDERS
const officeSrc = "/order-assets/office/office-order.jpg";
const kitchenSrc = "/order-assets/kitchen/kitchen.jpg";
const bedroomSrc = "/order-assets/bedroom/bedroom.jpg";
const startingOthesrSrc = "/order-assets/other/TC island.jpg";

// OFFICE ORDERS
const deskSrc = "/order-assets/office/desk.jpg";
const chairSrc = "/order-assets/office/chair.jpg";
const cabinetSrc = "/order-assets/office/cabinet.jpg";
const officeOthersSrc = "/order-assets/office/office-other.jpg";

// KITCHEN ORDERS
const linearSrc = "/order-assets/kitchen/linear.jpg";
const angledSrc = "/order-assets/kitchen/angle.jpg";
const uShapedSrc = "/order-assets/kitchen/u-shaped.jpg";
const kitchenOthersSrc = "/order-assets/kitchen/other.jpg";

// BEDROOM ORDERS
const bedSrc = "/order-assets/bedroom/bed.jpg";
const closetSrc = "/order-assets/bedroom/closet.jpg";
const sofaSrc = "/order-assets/bedroom/sofa.jpg";
const bedroomOthersSrc = "/order-assets/bedroom/other.jpg";

// OTHERS ORDERS
const bathroomSrc = "/order-assets/other/bathroom.jpg";
const entrySrc = "/order-assets/other/entryway.jpg";
const TCIslandSrc = "/order-assets/other/TC island.jpg";
const othersSrc = "/order-assets/other/TC island.jpg";

// MATERIALS ORDERS
const glassSrc = "/order-assets/materials/glass.jpg";
const plasticSrc = "/order-assets/materials/plastic.jpg";
const enamelSrc = "/order-assets/materials/enamel.jpg";
const materialsOthersSrc = "/order-assets/materials/other.jpg";

const startingOrders = [
  {
    imgSrc: officeSrc,
    title: "Офис",
    query: "?room=office",
  },
  {
    imgSrc: kitchenSrc,
    title: "Кухня",
    query: "?room=kitchen",
  },
  {
    imgSrc: bedroomSrc,
    title: "Спальная",
    query: "?room=bedroom",
  },
  {
    imgSrc: startingOthesrSrc,
    others: true,
    query: "?room=others",
  },
];

const officeOrders = [
  {
    imgSrc: deskSrc,
    title: "Столы",
    query: "&type=desk",
  },
  {
    imgSrc: chairSrc,
    title: "Стулья",
    query: "&type=chair",
  },
  {
    imgSrc: cabinetSrc,
    title: "Тумбы (шкафы)",
    query: "&type=cabinet",
  },
  {
    imgSrc: officeOthersSrc,
    others: true,
    query: "&type=others",
  },
];

const kitchenOrders = [
  {
    imgSrc: linearSrc,
    title: "Прямая",
    query: "&type=linear",
  },
  {
    imgSrc: angledSrc,
    title: "Угловая",
    query: "&type=angled",
  },
  {
    imgSrc: uShapedSrc,
    title: "П-образная",
    query: "&type=u-shaped",
  },
  {
    imgSrc: kitchenOthersSrc,
    others: true,
    query: "&type=others",
  },
];

const bedroomOrders = [
  {
    imgSrc: bedSrc,
    title: "Кровать",
    query: "&type=bed",
  },
  {
    imgSrc: closetSrc,
    title: "Шкаф",
    query: "&type=closet",
  },
  {
    imgSrc: sofaSrc,
    title: "Диван",
    query: "&type=sofa",
  },
  {
    imgSrc: bedroomOthersSrc,
    others: true,
    query: "&type=others",
  },
];

const othersOrders = [
  {
    imgSrc: bathroomSrc,
    title: "Ванная",
    query: "&type=bathroom",
  },
  {
    imgSrc: entrySrc,
    title: "Прихожая",
    query: "&type=entry",
  },
  {
    imgSrc: TCIslandSrc,
    title: "Торговый островок",
    query: "&type=tc-island",
  },
  {
    imgSrc: othersSrc,
    others: true,
    query: "&type=others",
  },
];

const materialsOrders = [
  {
    imgSrc: glassSrc,
    title: "Стекло",
    query: "&material=glass",
    total: true,
  },
  {
    imgSrc: plasticSrc,
    title: "Пластик",
    query: "&material=plastic",
    total: true,
  },
  {
    imgSrc: enamelSrc,
    title: "Эмаль",
    query: "&material=enamel",
    total: true,
  },
  {
    imgSrc: materialsOthersSrc,
    others: true,
    query: "&material=others",
    total: true,
  },
];

const orderQueries = {
  office: {
    orders: officeOrders,
    question: "Какую мебель вы хотите",
    title: "Офис",
  },
  kitchen: {
    orders: kitchenOrders,
    question: "Какую мебель вы хотите",
    title: "Кухня",
  },
  bedroom: {
    orders: bedroomOrders,
    question: "Какую мебель вы хотите",
    title: "Спальная",
  },
  others: {
    orders: othersOrders,
    question: "Какую мебель вы хотите",
    title: "Другое",
  },
};

const OrdersPage = (props) => {
  const router = useRouter();

  let content = {
    orders: startingOrders,
    question: "В какую комнату вам нужна мебель",
    title: null,
  };

  for (let orderQuery in orderQueries) {
    if (router.query["room"] === orderQuery) {
      content = orderQueries[orderQuery];
    }
    if (router.query["type"]) {
      content = {
        orders: materialsOrders,
        question: "Выбирете материал фасадов",
        title: "Материалы",
      };
    }
  }

  return (
    <Page title="Заказать">
      <OrderContent {...content} />
    </Page>
  );
};

export default OrdersPage;
