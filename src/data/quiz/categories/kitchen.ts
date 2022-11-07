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
const table = ["Пластик", "Искусственный Камень", "Натуральный Камень"];
const size = [];

const kitchen: FlatQuestion[] = [
  { shape },
  { constructor },
  { layout },
  { furniture },
  { front },
  { table },
  { size },
];

export default kitchen;
