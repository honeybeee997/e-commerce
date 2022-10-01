import { configureStore } from "@reduxjs/toolkit";

import backdropReducer from "./backdrop";
import authReducer from "./auth";
import searchReducer from "./search";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    backdrop: backdropReducer,
    auth: authReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
