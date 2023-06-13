import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { open: false, mode: "calculate-price", text: "" },
  reducers: {
    togglePopup(state, action: PayloadAction<string>) {
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

export const popupReducer = popupSlice.reducer;
export const popupActions = popupSlice.actions;
