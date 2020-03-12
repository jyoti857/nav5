import {reducer as formReducer} from 'redux-form';
import loginReducer from './reducer';
import loginSaga from './saga';

export function getLoginModule() {
  return {
    id: 'loginStore',
    reducerMap: {
      loginStore: loginReducer,
      form: formReducer,
    },
    sagas: [loginSaga],
  };
}
