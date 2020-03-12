import {createSelector} from 'reselect';
import {rootInitialState} from './rootReducer';

const rootReducers = state =>
  state.rootReducers ? state.rootReducers : rootInitialState;

const selectToastData = () =>
  createSelector(
    rootReducers,
    dataState => dataState.toast,
  );

const selectGlobalLoader = () =>
  createSelector(
    rootReducers,
    dataState => dataState.selectGlobalLoader,
  );

const selectRootAccessToken = () =>
  createSelector(
    rootReducers,
    dataState => dataState.selectRootAccessToken,
  );
const selectToastVisibility = () =>
  createSelector(
    rootReducers,
    dataState => dataState.toastVisible,
  );
const selectUserData = () =>
  createSelector(
    rootReducers,
    dataState => dataState.user,
  );
const selectSplashLoader = () =>
  createSelector(
    rootReducers,
    dataState => dataState.splashLoad,
  );
const selectUserRoles = () =>
  createSelector(
    rootReducers,
    dataState => dataState.userRoles,
  );
const selectCrashReload = () =>
  createSelector(
    rootReducers,
    dataState => dataState.crashReload,
  );
export {
  selectToastData,
  selectGlobalLoader,
  selectRootAccessToken,
  selectToastVisibility,
  selectUserData,
  selectUserRoles,
  selectSplashLoader,
  selectCrashReload,
};
