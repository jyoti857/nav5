// createStore allows us to load/unload modules dynamically.
import {createStore} from 'redux-dynamic-modules';

import {getSagaExtension} from 'redux-dynamic-modules-saga';
import {compose, combineReducers, createStore as createLoginStore} from 'redux';
import {getRootModule} from './app/module';
import loginStore from './containers/Login/reducer';
import {reducer as formReducer} from 'redux-form';
const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  return action => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const store = createStore(
  {},
  [compose()],
  [getSagaExtension()],
  getRootModule(),
);

store.dispatch = addPromiseSupportToDispatch(store);
export default store;

const configLoginReducers = combineReducers({
  loginReducer: loginStore,
  form: formReducer,
});

// export {configLoginReducers};
const loginStore_ = createLoginStore(configLoginReducers);
export {loginStore_};
