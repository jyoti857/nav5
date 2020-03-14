import {reducer as formReducer} from 'redux-form';
import conexionReducer from './reducer';
import conexionSaga from './saga';

export function getConexionModule() {
  return {
    // unique id of the module
    id: 'conexion-soiowewqionwe',
    reducerMap: {
      conexionStore: conexionReducer,
      form: formReducer,
    },
    // sagas: [conexionSaga],
  };
}
