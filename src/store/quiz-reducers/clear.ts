import { translateQuestion } from "../../features/quiz/translate";
import { categories } from "../quiz";

function clear() {
  return {
    isFinished: false,
    connectWay: "call",
    currentQuestion: "category",
    translatedQuestion: translateQuestion("category", null),
    indexOfQuestion: -1,
    availableOptions: categories,
    selectedOptions: [],
    answeredQuestions: [],
    category: null,
    categoryQuestions: null,
    constructorQuestions: {
      dishwasher: null,
    },
  };
}

export default clear;
