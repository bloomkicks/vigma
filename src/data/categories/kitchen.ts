import { front } from '../materials'
import { Questions, FlatQuestion} from "../quiz-questions"

const shape = ['Прямая', 'Угловая', 'П-образная']
const techs: FlatQuestion<string>[] = [
  { dishwasher: ['Да', 'Нет'] },
  { oven: ['В пенале', 'Внизу', 'Отдельная'] },
  { hood: ['Встроенная', 'Отдельная'] },
  { fridge: ['Обычный', "Широкий", 'Встроенный'] }
]
const furniture = ['Эконом', 'Стандарт', 'Премиум']
const table = ['Пластик', 'Иск. Камень']

const kitchen: Questions<string> = [
  { shape },
  { techs },
  { furniture },
  { front },
  { table },
  { size: ['is-size'] },
]

export default kitchen