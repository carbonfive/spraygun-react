import { applyMiddleware, combineReducers, createStore } from "redux";
import middleware from "./middleware";

const reducers = {};

export default createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(...middleware)
);
