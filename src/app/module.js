import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export function getRootModule() {
  return {
    // Unique id of the module
    id: 'rootStore-erioeworer',
    //Maps the store key to the reducer
    reducerMap: {rootStore: rootReducer},
    sagas: [rootSaga],
    initialActions: [],
  };
}
