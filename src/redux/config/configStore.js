// eslint-disable-next-line

import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentListSlice from "../modules/commentListSlice";
import commentSlice from "../modules/commentSlice";
import todoListSlice from "../modules/todoListSlice";
import todoSlice from "../modules/todoSlice";

const reducer = combineReducers({
  commentListSlice,
  todoListSlice,
  commentSlice,
  todoSlice,
});

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
