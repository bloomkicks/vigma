import setQuestion from "../../features/quiz/store/set-question";
import { QuizState } from "../../types/quiz";
import kitchenQuestions from "../../data/quiz/kitchen-questions";

function previousQuestion(state: QuizState) {
  let index = state.indexOfQuestion;

  if (index === 0) return;

  state.isFinished = false;
  state.indexOfQuestion--;

  // GET PREVIUOS QUESTION
  const previousQuestion = kitchenQuestions[state.indexOfQuestion];

  // SET CURRENT QUESTION AND ANSWERS
  setQuestion(
    state,
    previousQuestion,
    Object.values(state.answeredQuestions[state.indexOfQuestion])[0],
  );
}

export default previousQuestion;
