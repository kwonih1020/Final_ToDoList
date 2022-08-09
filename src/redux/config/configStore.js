// eslint-disable-next-line

// import logger from "redux-logger";s
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentListSlice from "../modules/commentListSlice";
import todoListSlice from "../modules/todoListSlice";

const reducer = combineReducers({
  commentListSlice,
  todoListSlice,
});

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
