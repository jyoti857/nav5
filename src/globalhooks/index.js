import {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {isTablet} from 'react-native-device-detection';

const useStatusBarConfiguration = () => {
  useEffect(() => {
    if (Platform.OS === 'android' && !isTablet) {
      SafeAreaView.setStatusBarHeight(StatusBar.currentHeight + 5);
    }
    if (Platform.OS === 'android' && isTablet) {
      SafeAreaView.setStatusBarHeight(StatusBar.currentHeight - 10);
    }
  }, []);
};

export {useStatusBarConfiguration};
