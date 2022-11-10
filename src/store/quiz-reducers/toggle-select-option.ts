import { QuizState } from "../../types/quiz";
import { PayloadAction } from "@reduxjs/toolkit";

function toggleSelectOption(state: QuizState, action: PayloadAction<string>) {
  const selectedOption = action.payload;
  const selectedIndex = state.selectedOptions.findIndex(
    (answ) => answ === selectedOption,
  );
  if (selectedIndex !== -1) {
    state.selectedOptions = [];
  } else {
    state.selectedOptions = [selectedOption];
  }
}

export default toggleSelectOption;
