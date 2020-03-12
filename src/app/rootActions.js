import {
  SET_TOAST_MESSAGE,
  SET_ROOT_ACCESS_TOKEN,
  SET_TOAST_VISIBLE,
  GET_USER_DATA,
  SET_USER_DATA,
  SET_USER_ROLES,
  SET_SPALSH_LOADER,
  SET_RESTORE_TOKEN,
  RESET_TOKEN,
  SET_SHOW_NO_NW,
  SAVE_JS_ERROR_SERVER,
  SET_CRASH_RELOAD,
} from './rootConstants';
import {
  SET_GLOBAL_LOADER,
  SET_INDIVIDUAL_DETAILS,
} from '../containers/Conexion/constants';

export const setToastMessage = toast => ({
  type: SET_TOAST_MESSAGE,
  toast,
});

export const setRootGlobalLoader = loader => ({
  type: SET_GLOBAL_LOADER,
  loader,
});

export const setRootAccessToken = token => ({
  type: SET_ROOT_ACCESS_TOKEN,
  token,
});

export const setToastVisibility = visible => ({
  type: SET_TOAST_VISIBLE,
  visible,
});
export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const setUserData = userData => ({
  type: SET_USER_DATA,
  userData,
});
export const setUserRoles = roles => ({
  type: SET_USER_ROLES,
  roles,
});
export const setSplashLoadValue = value => ({
  type: SET_SPALSH_LOADER,
  value,
});
export const setRestoreToken = token => ({
  type: SET_RESTORE_TOKEN,
  token,
});
export const resetUserToken = () => ({
  type: RESET_TOKEN,
});

export const setShowNONW = value => ({
  type: SET_SHOW_NO_NW,
  value,
});
export const logJSError = pObj => ({
  type: SAVE_JS_ERROR_SERVER,
  pObj,
});
export const setCrashLoadValue = value => ({
  type: SET_CRASH_RELOAD,
  value,
});
