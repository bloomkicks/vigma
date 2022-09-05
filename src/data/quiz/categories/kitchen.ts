import { frontOptions } from "../materials";
import { FlatQuestion } from "../../../types/quiz";

const shape = ["Прямая", "Угловая", "П-образная"];
const constructor = ["dishwasher", "oven", "hood", "microwave", "fridge"];
const furniture = ["Эконом", "Стандарт", "Премиум"];
const front = frontOptions;
const layout = [
  "Без верхних шкафов",
  "Посередине",
  "Со стороны",
  "Посередине и со стороны",
  "Посередине и с обоих сторон",
];
const table = ["Пластик", "Иск. Камень", "Нат. Камень"];
const size = [];
const gift = ["Сковорода", "Смеситель", "Набор Ножей"];

const kitchen: FlatQuestion[] = [
  { shape },
  { constructor },
  { layout },
  { furniture },
  { front },
  { table },
  { size },
  { gift },
];

export default kitchen;
