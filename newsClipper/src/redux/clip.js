import {createActions, handleActions} from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

//action-creator
export const actions = createActions({
  CLIP: {
    SET: item => item,
    PENDING: () => {},
    FAILURE: err => err,
    CHECK: () => {},
  },
});

const initialMyClip = [
  ['myClip', JSON.stringify({})],
  ['myClip_unChecked', JSON.stringify(0)],
];
const myClipKeys = ['myClip', 'myClip_unChecked'];

export const check = () => {
  return async dispatch => {
    dispatch(actions.clip.pending());
    AsyncStorage.setItem(myClipKeys[1], JSON.stringify(0))
      .then(() => AsyncStorage.getItem(myClipKeys[1]))
      .then(res => dispatch(actions.clip.check()));
  };
};

const createNewClip = res => {
  return {
    [res[0][0]]: JSON.parse(res[0][1]),
    unChecked: JSON.parse(res[1][1]),
  };
};

export const setClip = () => {
  return async dispatch => {
    dispatch(actions.clip.pending());
    AsyncStorage.getAllKeys()
      .then(keys => {
        return keys.includes('myClip')
          ? AsyncStorage.multiGet(myClipKeys)
          : AsyncStorage.multiSet(initialMyClip).then(() =>
              AsyncStorage.multiGet(myClipKeys),
            );
      })
      .then(async res => {
        dispatch(actions.clip.set(createNewClip(res)));
      })
      .catch(err => {
        dispatch(actions.clip.failure(err));
      });
  };
};

export const addClip = (item, myClip, unChecked, APIsource) => {
  return dispatch => {
    dispatch(actions.clip.pending());
    const _newItem = APIsource => {
      switch (APIsource) {
        case 'NAVER':
          return {[item.originallink]: {...item, searchEG: APIsource}};
        case 'GOOGLE':
          return {[item.url]: {...item, searchEG: APIsource}};
        case 'NYTIMES':
          return {[item.uri]: {...item, searchEG: APIsource}};
      }
    };
    const newClip = [
      [myClipKeys[0], JSON.stringify({...myClip, ..._newItem(APIsource)})],
      [myClipKeys[1], JSON.stringify(unChecked + 1)],
    ];
    console.log(newClip);
    AsyncStorage.multiSet(newClip)
      .then(() => AsyncStorage.multiGet(myClipKeys))
      .then(res => dispatch(actions.clip.set(createNewClip(res))))
      .catch(err => dispatch(actions.clip.failure(err)));
  };
};
const _clipKey = (item, APIsource) => {
  switch (APIsource) {
    case 'NAVER':
      return item.originallink;
    case 'GOOGLE':
      return item.url;
    case 'NYTIMES':
      return item.uri;
  }
};
export const delClip = (item, myClip, unChecked, APIsource) => {
  return dispatch => {
    dispatch(actions.clip.pending());
    let newClips = {...myClip};
    delete newClips[_clipKey(item, APIsource)];
    const newUnChecked = unChecked ? unChecked - 1 : 0;
    const newClip = [
      [myClipKeys[0], JSON.stringify(newClips)],
      [myClipKeys[1], JSON.stringify(newUnChecked)],
    ];
    AsyncStorage.multiSet(newClip)
      .then(() => AsyncStorage.multiGet(myClipKeys))
      .then(res => dispatch(actions.clip.set(createNewClip(res))))
      .catch(err => dispatch(actions.clip.failure(err)));
  };
};

const initialState = {
  myClip: {},
  pending: false,
  error: false,
  unChecked: 0,
};

export default handleActions(
  {
    'CLIP/PENDING': (state, action) => {
      return {
        ...state,
        pending: true,
      };
    },

    'CLIP/FAILURE': (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    },
    'CLIP/SET': (state, action) => {
      return {
        ...state,
        pending: false,
        myClip: action.payload.myClip,
        unChecked: action.payload.unChecked,
      };
    },
    'CLIP/CHECK': (state, action) => {
      return {
        ...state,
        pending: false,
        unChecked: 0,
      };
    },
  },
  initialState,
);