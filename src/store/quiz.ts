import { PayloadAction } from "@reduxjs/toolkit"
import categories, { Questions, FlatQuestion } from "../data/quiz-questions"
import { createSlice } from "@reduxjs/toolkit"

type State = {
  // current question and its index
  currentQuestion: string,
  indexOfQuestion: number,

  // answers AVAILABLE & SELECTED
  availableAnswers: (string | FlatQuestion<string>)[],
  selectedAnswers: (string | FlatQuestion<string>)[],

  // storage of answered questions (array)
  answeredQuestions: Questions<string>

  // all questions - if has category
  category?: keyof typeof categories,
  categoryQuestions?: Questions<string>,
}

const initialState: State = {
  category: null,
  selectedAnswers: [],
  answeredQuestions: [],
  availableAnswers: Object.keys(categories),
  currentQuestion: 'category',
  indexOfQuestion: -1,
  categoryQuestions: null,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    toggleSelectAnswer(state: State, action: PayloadAction<string | FlatQuestion<string>>) {
      const answer = action.payload
      const selectedIndex = state.selectedAnswers.findIndex(answ => answ === answer)
      if (selectedIndex !== -1) {
        state.selectedAnswers.splice(selectedIndex, 1)
      }
      else {
        state.selectedAnswers.push(answer)
      }
    },
    nextQuestion(state: State) {
      let index = state.indexOfQuestion

      // EDGE CASES
      // no answers selected
      if (state.selectedAnswers.length === 0) {
        return state
      }

      // set category if first question
      if (index === -1) {
        state.category = state.selectedAnswers[0] as string
        state.categoryQuestions = categories[state.category]
      }

      // if it's a last question
      else if (index >= state.categoryQuestions.length - 1) {
        return state
      }

      // SAVE ANSWERS IN ANSWERED QUESTIONS
      const answeredQuestion = {}
      answeredQuestion[state.currentQuestion] = state.selectedAnswers.slice()

      state.answeredQuestions[index] = answeredQuestion

      // GET NEXT QUESTION
      state.indexOfQuestion++
      const nextQuestion = state.categoryQuestions![state.indexOfQuestion]

      // SET NEXT QUESTION SET (question, availableAnswers, selectedAnswers)
      state.currentQuestion = Object.keys(nextQuestion)[0]
      state.availableAnswers = Object.values(nextQuestion)[0]
      state.selectedAnswers = []

      return state
    },
    previousQuestion(state: State) {
      let index = state.indexOfQuestion

      if (index <= 0) {
        state.category = null
        state.categoryQuestions = null
        state.currentQuestion = 'category'
        state.availableAnswers = Object.keys(categories)
        state.selectedAnswers = Object.values(state.answeredQuestions[state.indexOfQuestion])[0].slice()
      }
      else {
        // GET PREVIUOS QUESTION
        state.indexOfQuestion--
        const previuosQuestion = state.categoryQuestions[state.indexOfQuestion]

        // SET CURRENT QUESTION AND ANSWERS
        state.currentQuestion = Object.keys(previuosQuestion)[0]
        state.availableAnswers = Object.values(previuosQuestion)[0]
        state.selectedAnswers = Object.values(state.answeredQuestions[state.indexOfQuestion])[0].slice()
      }
    }
  }
})

export const quizReducer = quizSlice.reducer
export const quizActions = quizSlice.actions