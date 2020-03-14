import React from 'react';
import {StatusBar, View} from 'react-native';
import {
  NaivigationContainer,
  NavigationContainer,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {
  setRestoreToken,
  setRootAccessToken,
  resetUserToken,
} from '../../rootActions';

import AppRouter from '../../../routes';
import LoginScreen from '../../../containers/Login';
import ConexionScreen from '../../../containers/Conexion';
import Login from '../../../containers/Login/components/Login';
import {selectRootAccessToken, selectSplashLoader} from '../../rootSelector';
import AuthContext from '../AuthContext';

function SplashScreen() {
  return (
    <View style={{flex: 1}}>
      {/* <Loader */}
      <StatusBar hidden />
    </View>
  );
}

const Stack = createStackNavigator();

const Authentication = props => {
  const {dispatchRestoreToken, dispatchSetToken, dispatchResetToken} = props;

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
          };
        default:
          return null;
      }
    },
    {
      isLoading: true,
      userToken: null,
    },
  );
  React.useEffect(() => {
    // fetch the token storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('@appusertoken');
        console.log('from authentication index useEffect -->', token);
      } catch (e) {
        // restoring the reason on token failed
      }
      // After resroring token, we may need to validate it in production app
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away
      dispatchRestoreToken(token);
      dispatch({type: 'RESTORE_TOKEN', token});
    };
    bootstrapAsync();
  }, [dispatchRestoreToken]);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatchSetToken(data);
        dispatch({type: 'SIGN_IN', token: data});
      },
      signOut: () => {
        dispatchResetToken();
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [dispatchResetToken, dispatchSetToken],
  );
  const AuthFlow = () => {
    if (!state.isLoading) {
      return (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login">
            {propsL => <LoginScreen {...propsL} />}
          </Stack.Screen>
        </Stack.Navigator>
      );
    } else {
      return <AppRouter />;
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AuthFlow />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const mapStateToProps = createStructuredSelector({
  userToken: selectRootAccessToken(),
  isLoading: selectSplashLoader(),
});

const mapDispatchToProps = dispatch => ({
  dispatchRestoreToken: token => dispatch(setRestoreToken(token)),
  dispatchSetToken: value => dispatch(setRootAccessToken(value)),
  dispatchResetToken: () => dispatch(resetUserToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentication);
