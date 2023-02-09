import { translateQuestion } from "../features/quiz/translate";
import type { QuizState } from "../types/quiz";
// import allCategoryQuestions from "../data/quiz/category-questions";
import kitchenQuestions from "../data/quiz/kitchen-questions";
import { createSlice } from "@reduxjs/toolkit";

import nextQuestion from "./quiz-reducers/next-question";
import clear from "./quiz-reducers/clear";
import toggleSelectOption from "./quiz-reducers/toggle-select-option";
import previousQuestion from "./quiz-reducers/previous-question";
import selectConstructorOption from "./quiz-reducers/select-constructor-option";
import selectProduct from "./quiz-reducers/select-product";

const initialState: QuizState = {
  isFinished: false,
  currentQuestion: "shape",
  translatedQuestion: translateQuestion("shape"),
  indexOfQuestion: 0,
  availableOptions: kitchenQuestions[0].shape,
  selectedOptions: [],
  answeredQuestions: [],
  constructorQuestions: {
    dishwasher: null,
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    toggleSelectOption,
    nextQuestion,
    previousQuestion,
    selectConstructorOption,
    selectProduct,
    clear,
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
