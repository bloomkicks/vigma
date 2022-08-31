import { Translation } from "../../types/quiz";
import { Category } from "../../types/quiz";

export const categoriesTranslations = {
  kitchen: "Кухни",
  closet: "Шкафы",
  childish: "Детская мебель",
  bathroom: "Мебель для Ванной",
  shop: "Торговая мебель",
  office: "Оффисная мебель",
  // constructor questions - categories
  dishwasher: "Посудомойка",
  oven: "Духовoка",
  hood: "Вытяжка",
  microwave: "Микроволновка",
  fridge: "Холодильник",
};

// KITCHEN
let table = "Выбирете материалы столешницы";
let furniture = "Выбирете фурнитуру шкафов";
let constructor = "Выбирете технику для кухни";

export const questionsTranslations: {
  [question: string]: Translation;
} = {
  category,
  shape,
  front,
  body,
  table,
  furniture,
  size,
  constructor,
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

function size(): string {
  return "Укажите размеры кухни";
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
