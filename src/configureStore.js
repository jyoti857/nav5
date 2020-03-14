// createStore allows us to load/unload modules dynamically.
import {createStore} from 'redux-dynamic-modules';

import {getSagaExtension} from 'redux-dynamic-modules-saga';
import {compose, combineReducers} from 'redux';
import {getRootModule} from './app/module';
import loginStore from './containers/Login/reducer';
import {reducer as formReducer} from 'redux-form';
import {getLoginModule} from './containers/Login/module';
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
// const loginStore_ = createStore(configLoginReducers);
const loginStore_ = createStore(
  {},
  [compose()],
  [getSagaExtension()],
  getRootModule(),
);
export {loginStore_};
