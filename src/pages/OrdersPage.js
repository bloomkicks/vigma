import { useLocation, useNavigate } from "react-router-dom";

import OrderContent from '../components/order/OrderContent'
import Page from '../components/layout/Page'
import classes from "./OrdersPage.module.css";

// STARTING ORDERS
import officeSrc from "../assets/order/office/office-order.jpg";
import kitchenSrc from "../assets/order/kitchen/kitchen.jpg";
import bedroomSrc from "../assets/order/bedroom/bedroom.jpg";
import startingOthesrSrc from "../assets/order/other/TC island.jpg";

// OFFICE ORDERS
import deskSrc from "../assets/order/office/desk.jpg";
import chairSrc from "../assets/order/office/chair.jpg";
import cabinetSrc from "../assets/order/office/cabinet.jpg";
import officeOthersSrc from "../assets/order/office/office-other.jpg";

// KITCHEN ORDERS
import linearSrc from "../assets/order/kitchen/linear.jpg";
import angledSrc from "../assets/order/kitchen/angle.jpg";
import uShapedSrc from "../assets/order/kitchen/u-shaped.jpg";
import kitchenOthersSrc from "../assets/order/kitchen/other.jpg";

// BEDROOM ORDERS
import bedSrc from "../assets/order/bedroom/bed.jpg";
import closetSrc from "../assets/order/bedroom/closet.jpg";
import sofaSrc from "../assets/order/bedroom/sofa.jpg";
import bedroomOthersSrc from "../assets/order/bedroom/other.jpg";

// OTHERS ORDERS
import bathroomSrc from "../assets/order/other/bathroom.jpg";
import entrySrc from "../assets/order/other/entryway.jpg";
import TCIslandSrc from "../assets/order/other/TC island.jpg";
import othersSrc from "../assets/order/other/TC island.jpg";

// MATERIALS ORDERS
import glassSrc from '../assets/order/materials/glass.jpg'
import plasticSrc from '../assets/order/materials/plastic.jpg'
import enamelSrc from '../assets/order/materials/enamel.jpg'
import materialsOthersSrc from '../assets/order/materials/other.jpg'


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
    query: '&material=glass',
    total: true,
  },
  {
    imgSrc: plasticSrc,
    title: "Пластик",
    query: '&material=plastic',
    total: true,
  },
  {
    imgSrc: enamelSrc,
    title: "Эмаль",
    query: '&material=enamel',
    total: true,
  },
  {
    imgSrc: materialsOthersSrc,
    others: true,
    query: '&material=others',
    total: true,
  },
]

const orderQueries = {
  office: {
    orders: officeOrders,
    question: 'Какую мебель вы хотите',
    title: 'Офис'
  },
  kitchen: {
    orders: kitchenOrders,
    question: 'Какую мебель вы хотите',
    title: 'Кухня'
  },
  bedroom: {
    orders: bedroomOrders,
    question: 'Какую мебель вы хотите',
    title: 'Спальная'
  },
  others: {
    orders: othersOrders,
    question: 'Какую мебель вы хотите',
    title: 'Другое'
  },
}

const OrdersPage = props => {
  const location = useLocation();

  let content = {
    orders: startingOrders,
    question: 'В какую комнату вам нужна мебель',
    title: null
  }

  const searchParams = new URLSearchParams(location.search);
  for (let orderQuery in orderQueries) {
    if (searchParams.get('room') === orderQuery) {
      content = orderQueries[orderQuery]
    }
    if (searchParams.get('type')) {
      content = {
        orders: materialsOrders,
        question: 'Выбирете материал фасадов',
        title: 'Материалы',
      }
    }
  }

  return (
    <Page className={classes.OrdersPage} title="Заказать">
      <OrderContent {...content}/>
    </Page>
  )
}

export default OrdersPage