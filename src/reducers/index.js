import { combineReducers } from "redux";
import config from "./config";
import database from "./database";
import test from "./test";
const rootReducers = combineReducers({
  config,
  database,
  test,
});

export default rootReducers;
