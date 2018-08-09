import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import config from "../config";
import middleware from "./middleware";
import auth from "./auth";

const reducers = {
  auth
};

const composeEnhancers = config.redux.enableDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

export default createStore(
  combineReducers(reducers),
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
