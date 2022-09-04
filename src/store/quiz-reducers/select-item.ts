import { QuizState } from "../quiz";
import { PayloadAction } from "@reduxjs/toolkit";

function selectItem(state: QuizState, action: PayloadAction<string>) {
  const item = action.payload;

  state.item = item;
  state.isFinished = true;
}

export default selectItem;
