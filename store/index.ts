import { applyMiddleware, compose, createStore, Dispatch, Store } from "redux";
import { createLogger } from "redux-logger";

import rootReducer, { initialState } from "./rootReducer";

const middlewares =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? [createLogger()]
    : [];

const store: Store<typeof initialState> & {
  dispatch: Dispatch;
} = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export default store;
