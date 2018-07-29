import { applyMiddleware, combineReducers, createStore } from "redux";
import middleware from "./middleware";
import auth from "./auth";

const reducers = {
  auth
};

export default createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(...middleware)
);
