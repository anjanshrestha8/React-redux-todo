import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todos/todoSlice";
export const store = configureStore({
  reducer: {
    todoReducer,
  },
});
