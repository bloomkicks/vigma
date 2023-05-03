import type QuizState from "../types/quiz";
import questions from "../data/quiz/quiz-questions";
import defaultAnswers from "../data/quiz/quiz-default-answers";
import { useReducer } from "react";

function quizReducer(
  state: QuizState,
  action: {
    type: string;
    selectedOption?: string;
    equipment?: {
      name: string;
      variant: string;
    };
    size?: [dim: string, val: string];
  },
) {
  let curIndex = state.curIndex;
  let curQuestion = state.curQuestion;
  let answers = { ...state.answers };
  let isFinished = false;

  switch (action.type) {
    case "SELECT":
      answers[state.curIndex].question = questions[state.curIndex].question;
      answers[state.curIndex].selectedOption = action.selectedOption;
      break;

    case "EQUIPMENT_SELECT":
      let equipIndex = [
        "dishwasher",
        "oven",
        "hood",
        "microwave",
        "fridge",
      ].indexOf(action.equipment.name);
      answers[state.curIndex].equipmentAnswers[equipIndex].selectedVariant =
        action.equipment.variant;
      answers[state.curIndex].equipmentAnswers[equipIndex].equipment =
        action.equipment.name;
      break;

    case "NEXT":
      if (curIndex <= questions.length - 1) {
        curIndex++;
        curQuestion = questions[curIndex];
      } else isFinished = true;
      break;

    case "BACK":
      if (curIndex >= 1) curIndex--;
      curQuestion = questions[curIndex];
      break;

    case "CLEAR":
      curIndex = 0;
      curQuestion = questions[0];
      answers = defaultAnswers;
      break;

    case "SET_SIZE":
      answers[state.curIndex].question = "size";
      switch (action.size[0]) {
        case "depth":
          answers[state.curIndex].sizeAnswers.depth = action.size[1];
          break;
        case "height":
          answers[state.curIndex].sizeAnswers.height = action.size[1];
          break;
        default:
          answers[state.curIndex].sizeAnswers.width = action.size[1];
          break;
      }
      break;
    case "PRODUCT":
      isFinished = true;
      break;
    default:
      break;
  }

  return { curIndex, curQuestion, answers, isFinished };
}

const useQuiz = () => {
  const [quizState, dispatchQuiz] = useReducer(quizReducer, {
    curIndex: 0,
    curQuestion: questions[0],
    answers: defaultAnswers,
    isFinished: false,
  });

  return { quizState, dispatchQuiz };
};

export default useQuiz;
