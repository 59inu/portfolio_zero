import { createStore, combineReducers, applyMiddleware } from "redux";
import mark from "./mark";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  mark
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
