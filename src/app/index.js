import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

// import Store from '../co'
import StoreWrappedApp from './components/StoreWrappedApp';
import {paperTheme as themes} from '../theme/react-native-paper';
import store, {loginStore_} from '../configureStore';

const Device = require('react-native-device-detection');

const App = () => {
  const [isTablet, setIsTablet] = useState(false);
  const paperTheme = {
    ...themes,
    isTablet,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    if (Device.isTablet) {
      setIsTablet(true);
    }
  }, []);
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <Provider store={store}>
          <StoreWrappedApp />
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
