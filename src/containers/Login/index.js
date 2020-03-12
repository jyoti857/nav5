import React from 'react';
import {DynamicModulesLoader} from 'redux-dynamic-modules';

// import {StatusBar} from 'react-native';
import Login from './components/Login';
import {getLoginModule} from './module';
import {View} from 'react-native';
const LoginScreen = () => {
  return (
    // <View>
    <DynamicModulesLoader modules={[getLoginModule()]}>
      <Login />
    </DynamicModulesLoader>
  );
};

export default LoginScreen;
