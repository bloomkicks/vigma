import setQuestion from "../../features/quiz/store/set-question";
import save from "../../features/quiz/store/save";

import allCategoryQuestions from "../../data/quiz/category-questions";
import { Category } from "../../types/quiz";
import { QuizState } from "../quiz";

function nextQuestion(state: QuizState) {
  let index = state.indexOfQuestion;

  // SET CATEGORY IF FIRST QUESTION
  if (index === -1) {
    state.category = state.selectedOptions[0] as Category;
    state.categoryQuestions = allCategoryQuestions[state.category];
  }

  // SAVE ANSWERS IN ANSWERED QUESTIONS
  save(state);

  // FINISH WHEN:
  //   GIFT IS ASKED
  if (state.indexOfQuestion === -5) {
    state.isFinished = true;

    return state;
  }
  // SET GIFT WHEN:
  //   ITEM IS SELECTED
  //   THIS IS A LAST QUESTION
  //   HELP IS PRESSED
  else if (
    state.item ||
    index >= state.categoryQuestions.length - 1 ||
    state.selectedOptions[0] === "Помощь специалиста"
  ) {
    state.indexOfQuestion = -5;
    setQuestion(state, { gift: ["Сковорода", "Набор Ножей", "Смеситель"] });

    return state;
  }

  // GET NEXT QUESTION
  state.indexOfQuestion++;
  const nextQuestion = state.categoryQuestions![state.indexOfQuestion];

  setQuestion(state, nextQuestion);

  return state;
}

export default nextQuestion;
