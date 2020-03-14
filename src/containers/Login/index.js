import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

// import {StatusBar} from 'react-native';
import Login from './components/Login';
import {getLoginModule} from './module';
import {View} from 'react-native';
const LoginScreen = () => {
  return (
    // <View>
    <DynamicModuleLoader modules={[getLoginModule()]}>
      <Login />
    </DynamicModuleLoader>
  );
};

export default LoginScreen;
