import { createStore, combineReducers } from "redux";
import mark from "./mark";

const rootReducer = combineReducers({
  mark
});

const store = createStore(rootReducer);

export default store;
