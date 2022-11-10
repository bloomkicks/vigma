import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Size } from "../types/quiz";

const sizeSlice = createSlice({
  name: "size",
  initialState: {},
  reducers: {
    setSize(state, action: PayloadAction<[keyof Size, string]>) {
      const [which, value] = action.payload;
      state[which] = value;
    },
    clear() {
      return {};
    },
  },
});

export const sizeActions = sizeSlice.actions;
export const sizeReducer = sizeSlice.reducer;
