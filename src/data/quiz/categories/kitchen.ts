import { frontOptions } from "../materials";
import { FlatQuestion } from "../../../types/quiz";

const shape = ["Прямая", "Угловая", "П-образная"];
const constructor = ['dishwasher', 'oven', 'hood', 'microwave', 'fridge']
const furniture = ["Эконом", "Стандарт", "Премиум"];
const front = frontOptions;
const table = ["Пластик", "Иск. Камень"];
const size = [];

const kitchen: FlatQuestion[] = [
  { shape },
  { constructor },
  { furniture },
  { front },
  { table },
  { size },
];

export default kitchen;
