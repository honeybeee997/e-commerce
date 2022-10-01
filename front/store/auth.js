import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    open: (state) => {
      state.show = true;
    },
    close: (state) => {
      state.show = false;
    },
  },
});

export default auth.reducer;
export const authActions = auth.actions;
