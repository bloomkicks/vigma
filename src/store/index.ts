import { configureStore } from "@reduxjs/toolkit";
import { sizeReducer } from "./size";
import { quizReducer } from "./quiz";

const store = configureStore({
  reducer: { quiz: quizReducer, size: sizeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
