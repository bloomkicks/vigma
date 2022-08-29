import { PayloadAction } from "@reduxjs/toolkit";
import {
  Questions,
  FlatQuestion,
  Category,
} from "../models/quiz";
import allCategoryQuestions from '../data/quiz/category-questions'
import { createSlice } from "@reduxjs/toolkit";

const categories = Object.keys(allCategoryQuestions)

type State = {
  // current question and its index
  currentQuestion: string;
  indexOfQuestion: number;

  // answers AVAILABLE & SELECTED
  availableOptions: (string | FlatQuestion<string>)[];
  selectedOptions: (string | FlatQuestion<string>)[];

  // storage of answered questions (array)
  answeredQuestions: Questions<string>;

  // all questions - if has category
  category?: Category;
  categoryQuestions?: Questions<string>;
};

const initialState: State = {
  currentQuestion: "category",
  indexOfQuestion: -1,
  availableOptions: categories,
  selectedOptions: [],
  answeredQuestions: [],
  category: null,
  categoryQuestions: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    toggleSelectOption(
      state: State,
      action: PayloadAction<string | FlatQuestion<string>>,
    ) {
      const answer = action.payload;
      const selectedIndex = state.selectedOptions.findIndex(
        (answ) => answ === answer,
      );
      if (selectedIndex !== -1) {
        state.selectedOptions.splice(selectedIndex, 1);
      } else {
        state.selectedOptions.push(answer);
      }
    },
    nextQuestion(state: State) {
      let index = state.indexOfQuestion;

      // EDGE CASES
      // no answers selected
      if (state.selectedOptions.length === 0) {
        return state;
      }

      // set category if first question
      if (index === -1) {
        state.category = state.selectedOptions[0] as Category;
        state.categoryQuestions = allCategoryQuestions[state.category];
      }
      // if it's a last question
      else if (index >= state.categoryQuestions.length - 1) {
        return state;
      }

      // SAVE ANSWERS IN ANSWERED QUESTIONS
      const answeredQuestion = {};
      answeredQuestion[state.currentQuestion] = state.selectedOptions.slice();

      state.answeredQuestions[index] = answeredQuestion;

      // GET NEXT QUESTION
      state.indexOfQuestion++;
      const nextQuestion = state.categoryQuestions![state.indexOfQuestion];

      // SET NEXT QUESTION SET (question, availableAnswers, selectedAnswers)
      state.currentQuestion = Object.keys(nextQuestion)[0];
      state.availableOptions = Object.values(nextQuestion)[0];
      state.selectedOptions = [];

      return state;
    },
    previousQuestion(state: State) {
      let index = state.indexOfQuestion;
      
      if (index === 0) {
        state.category = null;
        state.categoryQuestions = null;
        state.currentQuestion = "category";
        state.availableOptions = categories;
        state.selectedOptions = Object.values(
          state.answeredQuestions[state.indexOfQuestion],
        )[0].slice();
      } else {
        // GET PREVIUOS QUESTION
        const previuosQuestion = state.categoryQuestions[state.indexOfQuestion];

        // SET CURRENT QUESTION AND ANSWERS
        state.currentQuestion = Object.keys(previuosQuestion)[0];
        state.availableOptions = Object.values(previuosQuestion)[0];
        state.selectedOptions = Object.values(
          state.answeredQuestions[state.indexOfQuestion],
        )[0].slice();
      }

      state.indexOfQuestion--;
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
