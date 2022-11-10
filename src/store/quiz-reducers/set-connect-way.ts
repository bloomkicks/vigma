import { PayloadAction } from "@reduxjs/toolkit";
import { QuizState } from "../../types/quiz";

function setConnectWay(state: QuizState, action: PayloadAction<string>) {
  state.connectWay = action.payload;
}

export default setConnectWay;
