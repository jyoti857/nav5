import {
  SET_ACCESS_TOKEN,
  GET_ACCESS_TOKEN,
  SET_LOADER_VALUE,
} from './constants';
import {GET_CONEXION_DETAILS} from '../Conexion/constants';

export const getAccessToken = (userName, password) => {
  console.log('from getAccessToken actions ---> ', userName, password);
  return {
    type: GET_ACCESS_TOKEN,
    // payload: {userName, password},
    userName,
    password,
  };
};

export const setAccessToken = token => ({
  type: SET_ACCESS_TOKEN,
  token,
});
export const setLoaderValue = value => ({
  type: SET_LOADER_VALUE,
  value,
});
