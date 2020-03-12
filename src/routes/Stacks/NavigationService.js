import {CommonActions} from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, param) =>
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: param,
    }),
  );
export default {
  setTopLevelNavigator,
  navigate,
};
