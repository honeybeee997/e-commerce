import { createSlice } from "@reduxjs/toolkit";
import useLocalstorage from "../hooks/use-localstorage";

const initialState = {
  token: "",
  user: null,
  isLoggedIn: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      const info = {
        token: action.payload.token,
        user: action.payload.user,
      };
      state.isLoggedIn = true;
      state.token = info.token;
      state.user = info.user;
      useLocalstorage("get", info);
    },
    logout: (state) => {
      state.token = "";
      state.user = "";
      state.isLoggedIn = false;
    },
  },
});

export default adminSlice.reducer;
export const adminActions = adminSlice.actions;
