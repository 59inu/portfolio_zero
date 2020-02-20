import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import news from './news';
import clip from './clip';
import screen from './screen';

const rootReducer = combineReducers({
  news,
  clip,
  screen,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
