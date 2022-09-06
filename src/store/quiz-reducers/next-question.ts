import allCategoryQuestions from "../../data/quiz/category-questions";
import { Category } from "../../types/quiz";
import { translateQuestion } from "../../features/quiz/translate";
import { QuizState } from "../quiz";

function nextQuestion(state: QuizState) {
  let index = state.indexOfQuestion;

  // SET CATEGORY IF FIRST QUESTION
  if (index === -1) {
    state.category = state.selectedOptions[0] as Category;
    state.categoryQuestions = allCategoryQuestions[state.category];
  }

  // SAVE ANSWERS IN ANSWERED QUESTIONS
  const answeredQuestion = {};
  answeredQuestion[state.currentQuestion] = state.selectedOptions.slice();

  state.answeredQuestions[index > -1 ? index : 0] = answeredQuestion;

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

    state.currentQuestion = "gift";
    state.translatedQuestion = "";

    state.availableOptions = ["Сковорода", "Набор Ножей", "Смеситель"];
    state.selectedOptions = [];

    return state;
  }

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
