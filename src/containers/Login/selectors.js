import {createSelector} from 'reselect';

import {rootInitialState} from '../../app/rootReducer';
import {loginInitialState} from './reducer';

const rootReducers = state =>
  state.rootState ? state.rootStore : rootInitialState;

const LoginReducers = state =>
  state.loginStore ? state.loginStore : loginInitialState;

const selectToken = () =>
  createSelector(
    LoginReducers,
    dataState => dataState.accessToken,
  );
const selectLoader = () =>
  createSelector(
    LoginReducers,
    dataState => dataState.loader,
  );
const selectToastVisibility = () =>
  createSelector(
    rootReducers,
    dataState => dataState.toastVisible,
  );

const selectToastData = () =>
  createSelector(
    rootReducers,
    dataState => dataState.toast,
  );
const selectRootAccessToken = () =>
  createSelector(
    rootReducers,
    dataState => dataState.accessToken,
  );
export {
  selectToken,
  selectLoader,
  selectToastVisibility,
  selectToastData,
  selectRootAccessToken,
};
