import { QuizState } from "../quiz";
import { PayloadAction } from "@reduxjs/toolkit";

function selectItem(state: QuizState, action: PayloadAction<string>) {
  const item = action.payload;
  state.item = item;

  // state.category = 'item'
  // state.currentQuestion = 'gift';
  // state.translatedQuestion = '';
  // state.availableOptions = ['Сковорода', 'Набор Ножей', 'Смеситель'];
  // state.selectedOptions = [];

  state.isFinished = true;
}

export default selectItem;
