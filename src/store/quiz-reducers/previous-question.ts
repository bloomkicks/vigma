import setQuestion from "../../features/quiz/store/set-question";
import { QuizState } from "../../types/quiz";
import { categories } from "../quiz";

function previousQuestion(state: QuizState) {
  let index = state.indexOfQuestion;

  state.isFinished = false;
  state.indexOfQuestion--;

  // IF BACK TO CATEGORY QUESTION
  if (index === 0) {
    state.selectedOptions = [state.category];

    state.category = null;
    state.categoryQuestions = null;

    setQuestion(state, { category: categories });
  } else {
    // GET PREVIUOS QUESTION
    const previousQuestion = state.categoryQuestions[state.indexOfQuestion];

    // SET CURRENT QUESTION AND ANSWERS
    setQuestion(
      state,
      previousQuestion,
      Object.values(state.answeredQuestions[state.indexOfQuestion])[0],
    );
  }
}

export default previousQuestion;
