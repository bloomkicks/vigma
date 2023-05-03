import type { QuizAnswer } from "../../types/quiz";
const selectedOption = null;
const selectedVariant = null;

const equipmentAnswers = [
  {
    equipment: "dishwasher",
    selectedVariant,
  },
  {
    equipment: "oven",
    selectedVariant,
  },
  {
    equipment: "hood",
    selectedVariant,
  },
  {
    equipment: "microwave",
    selectedVariant,
  },
  {
    equipment: "fridge",
    selectedVariant,
  },
];

const sizeAnswers = {
  width: null,
  height: null,
  depth: null,
};

const quizDefaultAnswers: QuizAnswer[] = [
  {
    question: "shape",
    selectedOption,
  },
  {
    question: "equipment",
    equipmentAnswers,
  },
  {
    question: "layout",
    selectedOption,
  },
  {
    question: "accessories",
    selectedOption,
  },
  {
    question: "front",
    selectedOption,
  },
  {
    question: "table",
    selectedOption,
  },
  {
    question: "size",
    sizeAnswers,
  },
  {
    question: "gift",
    selectedOption,
  },
];

export default quizDefaultAnswers;
