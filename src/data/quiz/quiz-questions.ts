import type { QuizQuestion } from "../../types/quiz";

const shapeOptions = ["Прямая", "Угловая", "П-образная"];
const layoutOptions = [
  "Без верхних шкафов",
  "Посередине",
  "Со стороны",
  "Посередине и со стороны",
  "Посередине и с обоих сторон",
];
const frontOptions = [
  "ЛДСП",
  "МДФ Пластик",
  "МДФ Крашенный",
  "МДФ AGT",
  "МДФ в Плёнке",
  "МДФ Акрил",
  "Массив",
];
const accessoriesOptions = ["Эконом", "Стандарт", "Премиум"];
const tableOptions = ["Пластик", "Искусственный Камень", "Натуральный Камень"];
const giftOptions = [
  "Встраимаевая вытяжка",
  "Электрическая плита",
  "Микроволновая печь",
];

const quizQuestions: QuizQuestion[] = [
  {
    question: "shape",
    options: shapeOptions,
  },
  {
    question: "equipment",
  },
  {
    question: "layout",
    options: layoutOptions,
  },
  {
    question: "accessories",
    options: accessoriesOptions,
  },
  {
    question: "front",
    options: frontOptions,
  },
  {
    question: "table",
    options: tableOptions,
  },
  {
    question: "size",
  },
  {
    question: "gift",
    options: giftOptions,
  },
];

export const equipmentQuestions = [
  {
    equipment: "dishwasher",
    variants: ["Да", "Нет"],
  },
  {
    equipment: "oven",
    variants: ["В пенале", "Внизу", "Отдельная"],
  },
  {
    equipment: "hood",
    variants: ["Встроенная", "Отдельная"],
  },
  {
    equipment: "microwave",
    variants: ["Встроенная", "Отдельная", "Нет"],
  },
  {
    equipment: "fridge",
    variants: ["Обычный", "Широкий", "Встроенный"],
  },
];
export default quizQuestions;
