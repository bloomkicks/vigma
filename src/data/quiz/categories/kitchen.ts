import { frontOptions } from "../materials";
import { Questions, FlatQuestion } from "../../../types/quiz";

const shape = ["Прямая", "Угловая", "П-образная"];
const constructor: FlatQuestion[] = [
  { dishwasher: ["Да", "Нет"] },
  { oven: ["В пенале", "Внизу", "Отдельная"] },
  { hood: ["Встроенная", "Отдельная"] },
  { microwave: ["Встроенная", "Отдельная", "Нет"] },
  { fridge: ["Обычный", "Широкий", "Встроенный"] },
];
const furniture = ["Эконом", "Стандарт", "Премиум"];
const front = frontOptions;
const table = ["Пластик", "Иск. Камень"];
const size = [];

const kitchen: Questions<string> = [
  { shape },
  { constructor },
  { furniture },
  { front },
  { table },
  { size },
];

export default kitchen;
