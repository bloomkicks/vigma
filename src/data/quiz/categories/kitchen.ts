import { frontOptions } from "../materials";
import { Questions, FlatQuestion } from "../../../models/quiz";

const shape = ["Прямая", "Угловая", "П-образная"];
const techs: FlatQuestion<string>[] = [
  { dishwasher: ["Да", "Нет"] },
  { oven: ["В пенале", "Внизу", "Отдельная"] },
  { hood: ["Встроенная", "Отдельная"] },
  { fridge: ["Обычный", "Широкий", "Встроенный"] },
];
const furniture = ["Эконом", "Стандарт", "Премиум"];
const front = frontOptions
const table = ["Пластик", "Иск. Камень"];
const size = []

const kitchen: Questions<string> = [
  { shape },
  { techs },
  { furniture },
  { front },
  { table },
  { size },
];

export default kitchen;
