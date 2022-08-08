import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentSlice from "../modules/commentSlice";

const reducer = combineReducers({ commentSlice });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
