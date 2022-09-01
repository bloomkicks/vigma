import { translateQuestion } from "../features/quiz/translate";
import { PayloadAction } from "@reduxjs/toolkit";
import { FlatQuestion, Category, ConstructorQuestions } from "../types/quiz";
import allCategoryQuestions from "../data/quiz/category-questions";
import { createSlice } from "@reduxjs/toolkit";

const categories = Object.keys(allCategoryQuestions);

type State = {
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
  }
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
      state.translatedQuestion = translateQuestion(
        state.currentQuestion,
        state.category,
      );
      state.availableOptions = Object.values(nextQuestion)[0];
      state.selectedOptions = [];

      return state;
    },
    previousQuestion(state: State) {
      let index = state.indexOfQuestion;

      if (index === 0) {
        state.selectedOptions = [state.category];

        state.category = null;
        state.categoryQuestions = null;

        state.currentQuestion = "category";
        state.translatedQuestion = translateQuestion(
          state.currentQuestion,
          null,
        );
        state.availableOptions = categories;

        state.indexOfQuestion--;
      } else {
        // GET PREVIUOS QUESTION
        state.indexOfQuestion--;
        const previuosQuestion = state.categoryQuestions[state.indexOfQuestion];

        // SET CURRENT QUESTION AND ANSWERS
        state.currentQuestion = Object.keys(previuosQuestion)[0];
        state.translatedQuestion = translateQuestion(
          state.currentQuestion,
          state.category,
        );
        state.availableOptions = Object.values(previuosQuestion)[0];
        state.selectedOptions = Object.values(
          state.answeredQuestions[state.indexOfQuestion],
        )[0].slice();
      }
    },
    selectConstructorOption(
      state: State,
      action: PayloadAction<{ [question: string]: string }>,
    ) {
      const constructorQuestions = state.constructorQuestions;
      const allQuestions = state.availableOptions
      const [question, answer] = Object.entries(action.payload)[0];

      constructorQuestions[question] = answer;

      const nextQuestionIndex = allQuestions.indexOf(question) + 1
      if (nextQuestionIndex > allQuestions.length) {
        return state
      }
      const nextQuestion = allQuestions[nextQuestionIndex]
      if (constructorQuestions[nextQuestion]) {

      } 
      constructorQuestions[nextQuestion] = null
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
