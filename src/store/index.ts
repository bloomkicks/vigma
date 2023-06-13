import { quizReducer } from "./quiz-slice";
import { configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "./popup-slice";

const store = configureStore({
  reducer: { popup: popupReducer, quiz: quizReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
