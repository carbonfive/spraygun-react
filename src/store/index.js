import { applyMiddleware, compose, createStore } from "redux";
import config from "../config";
import middleware from "./middleware";
import reducer from "./reducers";

const composeEnhancers = config.redux.enableDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

export default createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
