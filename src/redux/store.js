import { createStore, combineReducers, applyMiddleware } from "redux";
import mark from "./mark";
import header from "./header";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  mark,
  header
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
