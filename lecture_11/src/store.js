import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import todoSlice from "./redux/todoSlice";
import logger from "redux-logger";

const rootReducer = combineReducers({
  todos: todoSlice,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [logger, thunkMiddleware],
});
