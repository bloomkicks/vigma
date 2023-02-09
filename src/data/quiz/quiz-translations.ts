import { Translation } from "../../types/quiz";
import { Category } from "../../types/quiz";

export const categoriesTranslations = {
  kitchen: "Кухни",
  // closet: "Шкафы",
  // childish: "Детская мебель",
  // bathroom: "Мебель для Ванной",
  // shop: "Торговая мебель",
  // office: "Офисная мебель",
  // // constructor questions - categories
  dishwasher: "Посудомойка",
  oven: "Духовoка",
  hood: "Вытяжка",
  microwave: "Микроволновка",
  fridge: "Холодильник",
  product: "Мебель из Каталога",
};

let gift = "Выбирете ваш подарок";
// KITCHEN
let table = "Выбирете материалы столешницы";
let furniture = "Выбирете фурнитуру шкафов";
let constructor = "Выбирете технику для кухни";
let layout = "Выбирете планировку верхних шкафов";

export const questionsTranslations: {
  [question: string]: Translation;
} = {
  category,
  shape,
  front,
  body,
  table,
  furniture,
  layout,
  size,
  constructor,
  gift,
};

// FUNCTION TRANSLATIONS
function shape(category: Category): string {
  let result = "Выбирете ";

  switch (category) {
    case "kitchen":
      result += "форму кухни";
      break;
    case "closet":
      result += "тип шкафа";
      break;
    default:
      result += "форму";
  }

  return result;
}

function size(category: Category): string {
  let result = "Укажите размеры ";
  switch (category) {
    case "kitchen":
      result += "кухни";
      break;
    case "closet":
      result += "шкафа";
      break;
    default:
      result = "Укажите желаемые размеры";
  }
  return result;
}
function category(category: Category): string {
  if (!category) {
    return "Выбирете категорию мебели";
  }

  return "Выбирете нужную мебель";
}
function front(): string {
  return "Выбирете материалы фасада";
}
function body(): string {
  return "Выбирете материалы корпуса";
}
