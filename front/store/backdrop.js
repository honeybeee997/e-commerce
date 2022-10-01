import { createSlice } from "@reduxjs/toolkit";

const initialState = { showBackdrop: false };

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    open: (state) => {
      state.showBackdrop = true;
    },
    close: (state) => {
      state.showBackdrop = false;
    },
  },
});

export const backdropActions = backdropSlice.actions;
export default backdropSlice.reducer;
