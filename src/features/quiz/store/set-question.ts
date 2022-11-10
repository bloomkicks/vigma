import { FlatQuestion, QuizState } from "../../../types/quiz";
import { translateQuestion } from "../translate";

function setQuestion(
  state: QuizState,
  question: FlatQuestion,
  selectedOptions?: string[],
) {
  let questionKey = Object.keys(question)[0];

  state.currentQuestion = questionKey;
  state.translatedQuestion = translateQuestion(questionKey, state.category);
  state.availableOptions = question[questionKey];
  state.selectedOptions = selectedOptions || [];
}

export default setQuestion;
