import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "Cart",
  initialState: {
    show: false,
  },
  reducers: {
    open: (state) => {
      state.show = true;
    },
    close: (state) => {
      state.show = false;
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
