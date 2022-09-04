import { translateQuestion } from "../../features/quiz/translate";
import { QuizState, categories } from "../quiz";

function previousQuestion(state: QuizState) {
  let index = state.indexOfQuestion;
  state.isFinished = false;

  if (index === 0) {
    state.selectedOptions = [state.category];

    state.category = null;
    state.categoryQuestions = null;

    state.currentQuestion = "category";
    state.translatedQuestion = translateQuestion(state.currentQuestion, null);
    state.availableOptions = categories;

    state.indexOfQuestion--;
  } else {
    // GET PREVIUOS QUESTION
    state.indexOfQuestion--;
    const previuosQuestion = state.categoryQuestions[state.indexOfQuestion];

    // SET CURRENT QUESTION AND ANSWERS
    state.currentQuestion = Object.keys(previuosQuestion)[0];
    state.translatedQuestion = translateQuestion(
      state.currentQuestion,
      state.category,
    );
    state.availableOptions = Object.values(previuosQuestion)[0];
    state.selectedOptions = Object.values(
      state.answeredQuestions[state.indexOfQuestion],
    )[0].slice();
  }
}

export default previousQuestion;
