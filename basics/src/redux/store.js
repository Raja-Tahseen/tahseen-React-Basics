import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    //Adding the first reducer
    counterStore: counterReducer,
  },
});
