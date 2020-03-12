import produce from 'immer';

import {SET_ACCESS_TOKEN, SET_LOADER_VALUE} from './constants';

export const loginInitialState = {
  accessToken: null,
  loader: false,
};

export const loginStore = (state = loginInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case SET_ACCESS_TOKEN: {
        draftState.accessToken = action.value;
        break;
      }
      case SET_LOADER_VALUE: {
        draftState.loader = action.value;
        break;
      }
      default: {
        // do nothing
      }
    }
  });

export default loginStore;
