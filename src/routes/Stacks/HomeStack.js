import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../containers/Home';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator
    screenOptions={{
      headerTintColor: 'white',
    }}
    headerMode="screen">
    <Home.Screen
      name="DashboardMainScreen"
      component={HomeScreen}
      options={{
        title: 'Dashboard',
        headerTitleStyle: {
          fontSize: 20,
        },
        // headerBackground: () => <GradientBackground />,
      }}
    />
  </Home.Navigator>
);

export default HomeStack;
