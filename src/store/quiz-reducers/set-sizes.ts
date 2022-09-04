import { PayloadAction } from "@reduxjs/toolkit";
import { QuizState } from "../quiz";

function setSizes(
  state: QuizState,
  action: PayloadAction<{ width: number; height: number }>,
) {
  state.sizes = action.payload;
}

export default setSizes;
