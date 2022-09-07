import setQuestion from "../../features/quiz/store/set-question";
import save from "../../features/quiz/store/save";
import { QuizState } from "../quiz";
import { PayloadAction } from "@reduxjs/toolkit";

function selectItem(state: QuizState, action: PayloadAction<string>) {
  state.item = action.payload;

  // SAVE PREVIUS QUESTION
  save(state);

  state.indexOfQuestion = -5;

  // SET THE GIFT
  setQuestion(state, { gift: ["Сковорода", "Набор Ножей", "Смеситель"] });
}

export default selectItem;
