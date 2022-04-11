import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  bundle: null,
  isSkipped: false,
  queries: {
    shape: "",
    front: "",
    body: "",
    tablet: "",
    category: "",
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getIntoBundle(state, { payload: name }) {
      state.bundle = name;
      state.queries = {
        shape: "",
        front: "",
        body: "",
        tablet: "",
        category: name,
      };

      return state;
    },
    setInBundle(state, { payload: name }) {
      state.current = name;

      return state;
    },
    selectOrder(state, { payload: name }) {
      state.queries[state.current] = name;
      state.current = null;

      return state;
    },
    selectCustom(state, { payload: value }) {
      state.queries[state.current] = value;
      state.current = null;

      return state;
    },
    finish(state, { payload: isFinished }) {
      state.isFinished = isFinished === undefined ? true : isFinished;

      return state;
    },
    back(state) {
      if (state.current) {
        state.current = null;
      } else if (state.bundle) {
        state.bundle = null;
        state.queries = {
          shape: "",
          front: "",
          body: "",
          tablet: "",
          category: "",
        };
      }

      return state;
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
