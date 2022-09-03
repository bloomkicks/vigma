import { translateQuestion } from "../features/quiz/translate";
import { PayloadAction } from "@reduxjs/toolkit";
import { FlatQuestion, Category, ConstructorQuestions } from "../types/quiz";
import allCategoryQuestions from "../data/quiz/category-questions";
import { createSlice } from "@reduxjs/toolkit";

import nextQuestion from "./quiz-reducers/next-question";
import previousQuestion from "./quiz-reducers/previous-question";
import selectConstructorOption from "./quiz-reducers/select-constructor-option";

export const categories = Object.keys(allCategoryQuestions);
const initialState: State = {
  currentQuestion: "category",
  translatedQuestion: translateQuestion("category", null),
  indexOfQuestion: -1,
  availableOptions: categories,
  selectedOptions: [],
  answeredQuestions: [],
  category: null,
  categoryQuestions: null,
  constructorQuestions: {
    dishwasher: null,
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    toggleSelectOption(state: State, action: PayloadAction<string>) {
      const selectedOption = action.payload;
      const selectedIndex = state.selectedOptions.findIndex(
        (answ) => answ === selectedOption,
      );
      if (selectedIndex !== -1) {
        state.selectedOptions = [];
      } else {
        state.selectedOptions = [selectedOption];
      }
    },
    nextQuestion,
    previousQuestion,
    selectConstructorOption,
  },
});

export type State = {
  // current question and its index
  currentQuestion: string;
  indexOfQuestion: number;

  // answers AVAILABLE & SELECTED
  availableOptions: string[];
  selectedOptions: string[];

  // storage of answered questions (array)
  answeredQuestions: FlatQuestion[];

  // all questions - if has category
  category?: Category;
  categoryQuestions?: FlatQuestion[];

  // translated
  translatedQuestion?: string;

  // constructor question
  constructorQuestions: ConstructorQuestions;
};
export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
