import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./slice/counterSlice";
import usersReducer from "./slice/usersSlice";

export const store = configureStore({
  reducer: {
    //Adding the first reducer
    counterStore: counterReducer,
    users: usersReducer,
  },
});
