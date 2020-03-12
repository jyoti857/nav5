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
import {setResoreToken} from '../../rootActions';

import AppRouter from '../../../routes';
import LoginScreen from '../../../containers/Login';
import ConexionScreen from '../../../containers/Conexion';
import Login from '../../../containers/Login/components/Login';

function SplashScreen() {
  return (
    <View style={{flex: 1}}>
      {/* <Loader */}
      <StatusBar hidden />
    </View>
  );
}

const Stack = createStackNavigator();
const AuthFlow = () => {
  return true ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login">{props => <Login {...props} />}</Stack.Screen>
    </Stack.Navigator>
  ) : (
    <AppRouter />
  );
};

const Authentication = props => {
  const {dispatchRestoreToken} = props;
  React.useEffect(() => {
    // fetch the token storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('@appusertoken');
      } catch (e) {
        // restoring the reason on token failed
      }
      // After resroring token, we may need to validate it in production app
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away
      dispatchRestoreToken(token);
    };
    bootstrapAsync();
  }, [dispatchRestoreToken]);

  return (
    <NavigationContainer>
      <AuthFlow />
    </NavigationContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchRestoreToken: token => dispatch(setResoreToken(token)),
});

export default Authentication;
