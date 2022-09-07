import { FlatQuestion } from "../../../types/quiz";
import { QuizState } from "../../../store/quiz";

function save(state: QuizState) {
  const answeredQuestion: FlatQuestion = {};
  answeredQuestion[state.currentQuestion] = state.selectedOptions.slice();

  // if gift is already selected, by default an empty array is gift
  if (state.indexOfQuestion === -5) {
    if (answeredQuestion.gift.length === 0) {
      return;
    }

    state.answeredQuestions.push(answeredQuestion);
  } else {
    state.answeredQuestions[
      state.indexOfQuestion > -1 ? state.indexOfQuestion : 0
    ] = answeredQuestion;
  }
}

export default save;
