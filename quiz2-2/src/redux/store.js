import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./slices/jokesSlice";

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});
