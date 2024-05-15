// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { Reducer } from "./Reducer";
// import { thunk } from "redux-thunk";
// import { createLogger } from "redux-logger";

// const logger = createLogger();

// const rootreducer = combineReducers({ user: Reducer });
// const store = configureStore({
//   reducer: rootreducer,
//   middleware: [thunk, logger],
// });
// export default store;

import { combineReducers, createStore, applyMiddleware } from "redux";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({ user: Reducer });

const logger = createLogger();

const middleware = [thunk, logger];

const Store = createStore(rootReducer, applyMiddleware(...middleware));

export default Store;
