import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    shape: [],
    front: [],
    additional: [],
    gift: [],
    width: "",
    depth: "",
    height: "",
    connectMethod: "По телефону",
  } as { [question: string]: string[] | string },
  reducers: {
    selectOption(
      state: { [question: string]: string[] | any },
      action: PayloadAction<{ question: string; option: string }>,
    ) {
      let { question, option } = action.payload;

      if (state[question].includes(option)) {
        state[question] = state[question].filter((i: any) => i !== option);
      } else {
        state[question].push(option);
      }
    },
    setSize(
      state,
      action: PayloadAction<{ direction: string; value: string }>,
    ) {
      state[action.payload.direction] = action.payload.value;
    },
    setConnectMethod(state, action: PayloadAction<string>) {
      state.connectMethod = action.payload;
    },
    clear(state) {
      return {
        shape: [],
        front: [],
        additional: [],
        gift: [],
        width: "",
        depth: "",
        height: "",
        connectMethod: "По телефону",
      };
    },
  },
});

export const quizActions = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
