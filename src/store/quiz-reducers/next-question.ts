import kitchenQuestions from "../../data/quiz/kitchen-questions";
import setQuestion from "../../features/quiz/store/set-question";
import save from "../../features/quiz/store/save";

import { Category, QuizState } from "../../types/quiz";

function nextQuestion(state: QuizState) {
  let index = state.indexOfQuestion;

  // SAVE ANSWERS IN ANSWERED QUESTIONS
  save(state);

  // FINISH WHEN:
  //   GIFT IS ASKED
  if (state.indexOfQuestion === -5) {
    state.isFinished = true;

    return state;
  }
  // SET GIFT WHEN:
  //   PRODUCT IS SELECTED
  //   THIS IS A LAST QUESTION
  //   HELP IS PRESSED
  else if (
    state.product ||
    index >= kitchenQuestions.length - 1 ||
    state.selectedOptions[0] === "Помощь специалиста"
  ) {
    state.indexOfQuestion = -5;
    setQuestion(state, { gift: ["Сковорода", "Набор Ножей", "Смеситель"] });

    return state;
  }

  // GET NEXT QUESTION
  state.indexOfQuestion++;
  const nextQuestion = kitchenQuestions[state.indexOfQuestion];

  setQuestion(state, nextQuestion);

  return state;
}

export default nextQuestion;
