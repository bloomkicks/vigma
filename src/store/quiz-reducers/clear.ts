import kitchenQuestions from "../../data/quiz/kitchen-questions";
import type { QuizState } from "../../types/quiz";
import { translateQuestion } from "../../features/quiz/translate";

function clear(): QuizState {
  return {
    isFinished: false,
    currentQuestion: "shape",
    translatedQuestion: translateQuestion("shape"),
    indexOfQuestion: 0,
    selectedOptions: [],
    answeredQuestions: [],
    availableOptions: kitchenQuestions[0].shape,
    constructorQuestions: {
      dishwasher: null,
    },
  };
}

export default clear;
