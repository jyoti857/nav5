import {call, put, takeLatest} from 'redux-saga/effects';
import jwt from 'jwt-decode';

// absolute imports
import request from '../../utils/request';

import config from '../../config/config';
import {
  setToastMessage,
  setToastVisibility,
  getUserData,
} from '../../app/rootActions';

import {ERROR} from '../../utils/constants';
import {GET_ACCESS_TOKEN} from './constants';
import {setLoaderValue} from './actions';
import {setUserRoles, setRootAccessToken} from '../../app/rootActions';

function* getAccessToken({userName, password}) {
  console.log('from inside saga --->', userName, password);
  yield put(setLoaderValue(true));
  const requestURL = `${config.apiBaseURL}token`;
  const options = {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
    },
    body: `grant_type=password&userName=${userName}&Password=${password}`,
  };
  const data = yield call(request, requestURL, options);
  if (data && !data.access_token) {
    if (data.response) {
      yield put(
        setToastMessage({
          toastMessage: data.response.error_description,
          toastType: ERROR,
        }),
      );
    } else {
      yield put(setToastVisibility(true));
      yield put(setLoaderValue(false));
    }
  } else if (data.access_token) {
    yield put(setLoaderValue(false));
    yield put(setRootAccessToken(data.access_token));
    const decoded = jwt(data.access_token);
    yield put(setUserRoles(decoded.role));
    yield put(getUserData());
  }
}

export default function* initLoginPageSaga() {
  yield takeLatest(GET_ACCESS_TOKEN, getAccessToken);
}
