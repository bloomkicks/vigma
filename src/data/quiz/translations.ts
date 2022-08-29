import { Category } from "../../models/quiz"

export const categoriesTranslations = {
  kitchen: 'Кухни',
  closet: 'Шкафы',
  childish: 'Детская мебель',
  bathroom: 'Мебель для Ванной',
  shop: 'Торговая мебель',
  office: 'Оффисная мебель'
}

export const questionsTranslations: { [question: string]: (category: Category) => string } = {
  category,
  shape,
  front,
  body,
  table,
  furniture,
  size
}

function shape(category: Category): string {
  let result = 'Выбирете '

  switch (category) {
    case 'kitchen':
      result += 'форму кухни'
      break
    case 'closet':
      result += 'тип шкафа'
      break
    default:
      result += 'форму'
  }

  return result
}
function table(): string {
  return 'Выбирете материалы столешницы'
}
function furniture(): string {
  return 'Выбирете фурнитуру шкафов'
}
function size(): string {
  return 'Укажите размеры кухни'
}
function category(category: Category): string {
  if (!category) {
    return 'Выбирете категорию мебели'
  }

  return 'Выбирете нужную мебель'
}
function front(): string {
  return 'Выбирете материалы фасада'
}
function body(): string {
  return 'Выбирете материалы корпуса'
}
