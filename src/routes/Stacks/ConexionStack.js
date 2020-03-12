import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConexionScreen from '../../containers/Conexion';
import LoginScreen from '../../containers/Login';

const Conexion = createStackNavigator();

const ConexionStack = () => (
  <Conexion.Navigator
    screenOptions={{headerTintColor: 'white'}}
    headerMode="screen">
    <Conexion.Screen
      name="ConexionMainScreen"
      component={ConexionScreen}
      options={{
        title: 'conexion',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    />
  </Conexion.Navigator>
);
export default ConexionStack;
