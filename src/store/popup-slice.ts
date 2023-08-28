import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { open: false, mode: "calculate-price", text: "" },
  reducers: {
    toggleModal(state, action: PayloadAction<string>) {
      if (state.mode === action.payload) {
        state.open = !state.open;
      } else {
        state.mode = action.payload;
        state.open = true;
      }
    },
    toggleAll(state, action: PayloadAction<boolean | undefined>) {
      state.open =
        typeof action.payload === "boolean"
          ? action.payload
          : !state.open;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
