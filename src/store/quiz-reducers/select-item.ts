import { QuizState } from "../quiz";
import { PayloadAction } from "@reduxjs/toolkit";

function selectItem(state: QuizState, action: PayloadAction<string>) {
  const item = action.payload;
  state.item = item;

  // SAVE PREVIUS ANSWER
  const answeredQuestion = {};
  answeredQuestion[state.currentQuestion] = state.selectedOptions.slice();

  state.answeredQuestions[state.indexOfQuestion] = answeredQuestion;

  // SET THE GIFT
  state.indexOfQuestion = -5;

  state.currentQuestion = "gift";
  state.translatedQuestion = "";

  state.availableOptions = ["Сковорода", "Набор Ножей", "Смеситель"];
  state.selectedOptions = [];
}

export default selectItem;
