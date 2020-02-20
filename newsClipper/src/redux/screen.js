import {handleActions, createActions} from 'redux-actions';

//actions
export const screenActions = createActions({
  UPSCROLL: bool => bool,
  SELECTOR: bool => bool,
  SCREEN: screen => screen,
});

//initialState
const initialState = {
  upScroll: false,
  selector: false,
  screen: 'search',
};

//reducer
export default handleActions(
  {
    UPSCROLL: (state, action) => {
      return {
        ...state,
        upScroll: action.payload,
      };
    },
    SELECTOR: (state, action) => {
      return {
        ...state,
        selector: action.payload,
      };
    },
    SCREEN: (state, action) => {
      return {
        ...state,
        screen: action.payload,
      };
    },
  },
  initialState,
);
