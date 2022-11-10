import { PayloadAction } from "@reduxjs/toolkit";
import { QuizState } from "../../types/quiz";

function selectConstructorOption(
  state: QuizState,
  action: PayloadAction<{ [question: string]: string }>,
) {
  const constructorQuestions = state.constructorQuestions;
  let getIsMicrowaveVisible = () => {
    return (
      constructorQuestions["oven"] === "В пенале" &&
      constructorQuestions["hood"] !== null
    );
  };

  const allQuestions = state.availableOptions;
  const [question, answer] = Object.entries(action.payload)[0];

  constructorQuestions[question] = answer;

  // GET NEXT QUESTION (category)
  const nextQuestionIndex = allQuestions.indexOf(question) + 1;
  if (nextQuestionIndex >= allQuestions.length) {
    return state;
  }
  let nextQuestion = allQuestions[nextQuestionIndex];
  if (nextQuestion === "microwave" && !getIsMicrowaveVisible()) {
    nextQuestion = "fridge";
  }

  // SET THE NEXT QUESTION TO ITS PREVIUS VALUE or NULL
  const existingNextQuestion = constructorQuestions[nextQuestion];
  constructorQuestions[nextQuestion] = existingNextQuestion || null;

  // SET THE MICROWAVE TO 'Нет' IF OVEN ISN'T 'В пенале'
  if (question !== "microwave") {
    const microwave = getIsMicrowaveVisible()
      ? constructorQuestions["microwave"] || null
      : undefined;
    constructorQuestions["microwave"] = microwave;
  }
}

export default selectConstructorOption;
