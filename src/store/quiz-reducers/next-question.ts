import allCategoryQuestions from "../../data/quiz/category-questions";
import { Category } from "../../types/quiz";
import { translateQuestion } from "../../features/quiz/translate";
import { State } from "../quiz";

function nextQuestion(state: State) {
  let index = state.indexOfQuestion;

  // EDGE CASES
  // set category if first question
  if (index === -1) {
    state.category = state.selectedOptions[0] as Category;
    state.categoryQuestions = allCategoryQuestions[state.category];
  }
  // if it's a last question
  else if (index >= state.categoryQuestions.length - 1) {
    return state;
  }

  // SAVE ANSWERS IN ANSWERED QUESTIONS
  const answeredQuestion = {};
  answeredQuestion[state.currentQuestion] = state.selectedOptions.slice();

  state.answeredQuestions[index] = answeredQuestion;

  // GET NEXT QUESTION
  state.indexOfQuestion++;
  const nextQuestion = state.categoryQuestions![state.indexOfQuestion];

  // SET NEXT QUESTION SET (question, availableAnswers, selectedAnswers)
  state.currentQuestion = Object.keys(nextQuestion)[0];
  state.translatedQuestion = translateQuestion(
    state.currentQuestion,
    state.category,
  );
  state.availableOptions = Object.values(nextQuestion)[0];
  state.selectedOptions = [];

  return state;
}

export default nextQuestion;
