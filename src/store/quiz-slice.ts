import type { PayloadAction } from "@reduxjs/toolkit";
import questions from "../data/quiz/quiz-questions";
import defaultAnswers from "../data/quiz/quiz-default-answers";
import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    curIndex: 0,
    curQuestion: questions[0],
    answers: defaultAnswers,
    isFinished: false,
    product: null,
  },
  reducers: {
    select(state, action: PayloadAction<string>) {
      state.answers[state.curIndex].question =
        questions[state.curIndex].question;
      state.answers[state.curIndex].selectedOption = action.payload;
    },
    equipmentSelect(
      state,
      action: PayloadAction<{
        name: string;
        variant: string;
      }>,
    ) {
      let equipIndex = [
        "dishwasher",
        "oven",
        "hood",
        "microwave",
        "fridge",
      ].indexOf(action.payload.name);
      state.answers[state.curIndex].equipmentAnswers[
        equipIndex
      ].selectedVariant = action.payload.variant;
      state.answers[state.curIndex].equipmentAnswers[equipIndex].equipment =
        action.payload.name;
    },
    moveNext(state) {
      if (
        state.answers[state.curIndex].selectedOption === "Помощь специалиста"
      ) {
        state.curIndex = 7;
        state.curQuestion = questions[state.curIndex];
      } else if (state.curIndex <= questions.length - 2) {
        state.curIndex++;
        state.curQuestion = questions[state.curIndex];
      } else state.isFinished = true;
    },
    moveBack(state) {
      if (state.curIndex >= 1) state.curIndex--;
      state.curQuestion = questions[state.curIndex];
    },
    setSize(state, action: PayloadAction<[string, string]>) {
      state.answers[state.curIndex].question = "size";
      switch (action.payload[0]) {
        case "depth":
          state.answers[6].sizeAnswers.depth = action.payload[1];
          break;
        case "height":
          state.answers[6].sizeAnswers.height = action.payload[1];
          break;
        default:
          state.answers[6].sizeAnswers.width = action.payload[1];
          break;
      }
    },
    selectProduct(state, action: PayloadAction<string>) {
      state.product = action.payload;
      state.curIndex = 7;
      state.curQuestion = questions[state.curIndex];
    },
    clear(state) {
      state.curIndex = 0;
      state.curQuestion = questions[0];
      state.answers = defaultAnswers;
      state.isFinished = false;
      state.product = null;
    },
  },
});

export const quizReducer = quizSlice.reducer;
const quizActions = quizSlice.actions;

export default quizActions;
