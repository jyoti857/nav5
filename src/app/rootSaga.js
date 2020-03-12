import {call, put, takeLatest} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import request from '../../src/utils/request';
import config from '../../src/config/config';
import {ERROR, INFO} from '../../src/utils/constants';
import {setToastMessage, setToastVisibility, setUserData} from './rootActions';

import {GET_USER_DATA, SAVE_JS_ERROR_SERVER} from './rootActions';

function* getUserDataAPI() {
  const requestURL = `${config.apiURL}GetUserProfile`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    yield put(setUserData(response.data));
  } else {
    yield put(
      setToastMessage({
        toastMessage: response.message,
        toastType: ERROR,
      }),
    );
    yield put(setToastVisibility(true));
  }
}
const getUserData = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem('@userdata')
      .then(value => resolve(value))
      .catch(error => reject(error));
  });

export default function* initRootSaga() {
  yield takeLatest(GET_USER_DATA, getUserDataAPI);
  //   yield takeLatest()
}
