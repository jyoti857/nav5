import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AppRouter from './src/routes';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Detail">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen
    //       name="Detail"
    //       component={DetailsScreen}
    //       options={{title: 'jyoit'}}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <AppRouter />
  );
}
