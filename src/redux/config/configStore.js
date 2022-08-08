import { applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({});

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
