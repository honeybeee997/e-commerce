import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const search = createSlice({
  name: "Search",
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

export default search.reducer;
export const searchActions = search.actions;
