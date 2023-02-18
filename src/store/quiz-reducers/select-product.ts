import giftOptions from "../../data/quiz/gift-options";
import setQuestion from "../../features/quiz/store/set-question";
import save from "../../features/quiz/store/save";
import { QuizState } from "../../types/quiz";
import { PayloadAction } from "@reduxjs/toolkit";

function selectProduct(state: QuizState, action: PayloadAction<string>) {
  state.product = action.payload;

  // SAVE PREVIUS QUESTION
  save(state);

  state.indexOfQuestion = -5;

  // SET THE GIFT
  setQuestion(state, { gift: giftOptions });
}

export default selectProduct;
