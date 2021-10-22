import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-thunk";
import reducer from "../reducer/";

let store;
export function configStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
