import {handleActions, createActions} from 'redux-actions';

//actions
export const screenActions = createActions({
  UPSCROLL: bool => bool,
  SELECTOR: bool => bool,
});

//initialState
const initialState = {
  upScroll: false,
  selector: false,
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
  },
  initialState,
);
