import { quizReducer } from "./quiz-slice";
import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./popup-slice";

const store = configureStore({
  reducer: { modal: modalReducer, quiz: quizReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
