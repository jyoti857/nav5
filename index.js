/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app';
// import App from './App';
import {name as appName} from './app.json';
import Login from './src/containers/Login/components/Login';

AppRegistry.registerComponent(appName, () => App);
