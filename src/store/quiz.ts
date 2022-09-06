import { translateQuestion } from "../features/quiz/translate";
import { FlatQuestion, Category, ConstructorQuestions } from "../types/quiz";
import allCategoryQuestions from "../data/quiz/category-questions";
import { createSlice } from "@reduxjs/toolkit";

import nextQuestion from "./quiz-reducers/next-question";
import clear from "./quiz-reducers/clear";
import setConnectWay from "./quiz-reducers/set-connect-way";
import toggleSelectOption from "./quiz-reducers/toggle-select-option";
import previousQuestion from "./quiz-reducers/previous-question";
import selectConstructorOption from "./quiz-reducers/select-constructor-option";
import selectItem from "./quiz-reducers/select-item";

export const categories = Object.keys(allCategoryQuestions);
const initialState: QuizState = {
  isFinished: false,
  connectWay: "call",
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
    toggleSelectOption,
    nextQuestion,
    previousQuestion,
    selectConstructorOption,
    selectItem,
    clear,
    setConnectWay,
  },
});

export type QuizState = {
  connectWay: string;
  item?: string;
  isFinished: boolean;

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
