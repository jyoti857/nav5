import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './Stacks/HomeStack';
import HomeScreen from '../containers/Home';
import CustomDrawerContent from './MobileDrawerContent';

const Drawer = createDrawerNavigator();
const AppRouter = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Detail"
      drawerStyle={{backgroundColor: '#c6cbef', width: 240}}
      drawerContent={dProps => <CustomDrawerContent {...dProps} />}>
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
      <Drawer.Screen
        name="Detail"
        // component={HomeScreen}
        options={{title: 'jyoit'}}>
        {() => <HomeStack />}
      </Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppRouter;
