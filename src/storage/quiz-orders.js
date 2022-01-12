// STARTING ORDERS
const kitchenSrc = "/order-assets/kitchen/kitchen.jpg";
const childroomSrc = "/order-assets/childroom.jpg";
const entrySrc = "/order-assets/closet.jpg";
const TCIslandSrc = "/order-assets/TC island.jpg";

// KITCHEN ORDERS
const linearSrc = "/order-assets/kitchen/linear.jpg";
const angledSrc = "/order-assets/kitchen/angle.jpg";
const uShapedSrc = "/order-assets/kitchen/u-shaped.jpg";
const kitchenOthersSrc = "/order-assets/kitchen/other.jpg";

// MATERIALS ORDERS
const ldspSrc = "/order-assets/materials/ldsp.jpg";
const mdfSrc = "/order-assets/materials/mdf.jpg";
const massiveSrc = "/order-assets/materials/massive.jpg";
const materialsOthersSrc = "/order-assets/materials/other.jpg";

const startingOrders = [
  {
    imgSrc: kitchenSrc,
    title: "Кухня",
    query: "?type=kitchen",
  },
  {
    imgSrc: entrySrc,
    title: "Шкаф или Прихожая",
    query: "?type=entry",
  },
  {
    imgSrc: childroomSrc,
    title: "Детская",
    query: "?type=child",
  },
  {
    imgSrc: TCIslandSrc,
    title: "Торговый островок",
    query: "?type=tc-island",
  },
];

const kitchenOrders = [
  {
    imgSrc: linearSrc,
    title: "Прямая",
    query: "&shape=linear",
  },
  {
    imgSrc: angledSrc,
    title: "Угловая",
    query: "&shape=angled",
  },
  {
    imgSrc: uShapedSrc,
    title: "П-образная",
    query: "&shape=u-shaped",
  },
  {
    imgSrc: kitchenOthersSrc,
    others: true,
    query: "&shape=others",
  },
];

const materialsOrders = [
  {
    imgSrc: ldspSrc,
    title: "ЛДСП",
    query: "&material=ldsp",
    total: true,
  },
  {
    imgSrc: mdfSrc,
    title: "МДФ",
    query: "&material=mdf",
    total: true,
  },
  {
    imgSrc: massiveSrc,
    title: "Массив",
    query: "&material=massive",
    total: true,
  },
  {
    imgSrc: materialsOthersSrc,
    others: true,
    query: "&material=others",
    total: true,
  },
];

const quizOrders = {
  starting: startingOrders,
  kitchen: kitchenOrders,
  materials: materialsOrders
}

export default quizOrders