import produce from 'immer';
import AsyncStorage from '@react-native-community/async-storage';
import {INFO} from '../utils/constants';
import {
  SET_TOAST_MESSAGE,
  SET_ROOT_ACCESS_TOKEN,
  SET_TOAST_VISIBLE,
  SET_USER_DATA,
  SET_SPALSH_LOADER,
  SET_RESTORE_TOKEN,
  SET_CRASH_RELOAD,
  RESET_TOKEN,
  SET_SHOW_NO_NW,
} from './rootConstants';

export const rootInitialState = {
  toast: {
    toastMessage: '',
    toastType: INFO,
  },
  accessToken: null,
  globalLoader: false,
  toastVisible: false,
  user: {
    UserId: null,
    UserName: null,
    Email: null,
    FirstName: null,
    LastName: null,
    MiddleName: null,
    TimeZone: null,
    DisplayName: null,
    CustomerName: null,
    AvatarUrl: null,
  },
  userRoles: [],
  splashLoad: false,
  showNoNW: false,
  crashReload: false,
};

const rootReducer = (state = rootInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case SET_TOAST_MESSAGE: {
        draftState.toast = action.toast;
        break;
      }
      case SET_ROOT_ACCESS_TOKEN: {
        draftState.accessToken = action.token;
        break;
      }
      case SET_TOAST_VISIBLE: {
        draftState.toastVisible = action.visible;
        break;
      }
      case SET_USER_DATA: {
        draftState.user = action.userData;
        AsyncStorage.setItem('@userdata', JSON.stringify(action.userData));
        break;
      }
      case SET_SPALSH_LOADER: {
        draftState.splashLoad = action.value;
        break;
      }
      case SET_RESTORE_TOKEN: {
        draftState.accessToken = action.token;
        draftState.splashLoad = false;
        break;
      }
      case RESET_TOKEN: {
        draftState.accessToken = null;
        break;
      }
      case SET_SHOW_NO_NW: {
        draftState.showNoNW = action.value;
        break;
      }
      case SET_CRASH_RELOAD: {
        draftState.crashReload = action.value;
        break;
      }
      default: {
        // just be idle
      }
    }
  });

export default rootReducer;
