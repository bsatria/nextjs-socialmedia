import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const InitialState = {};

const enhancers = compose(
  typeof window !== "undefined" && process.env.NODE_ENV !== "production"
    ? window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export function initializeStore(initialState = InitialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancers);
}
