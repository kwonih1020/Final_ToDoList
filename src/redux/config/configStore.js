// eslint-disable-next-line

import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentListSlice from "../modules/commentListSlice";

const reducer = combineReducers({
  commentListSlice,
});

const store = configureStore({
  reducer,
  // 배포할때 logger는 지워야함
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
