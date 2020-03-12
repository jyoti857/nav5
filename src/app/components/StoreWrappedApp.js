import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {View} from 'react-native';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {useNetinfo} from '@react-native-community/netinfo';
import {
  selectToastVisibility,
  selectToastData,
  selectRootAccessToken,
} from '../rootSelector';
import SnackbarCustom from '../../components/Snackbar';
import Authentication from './Authentication';

const StoreWrappedApp = props => {
  //   const netInfo = useNetinfo();
  const {toastVisible, toast, setShowNoNetwork, dispatchGetUserData} = props;

  //   useEffect(() => {
  //     setShowNoNetwork(!netInfo.isConnected);
  //   });
  //   useEffect(() => {
  //     dispatchGetUserData();
  //   }, [dispatchGetUserData]);
  return <Authentication />;
};

/* <SnackbarCustom toastVisible={toastVisible} toast={toast} /> */

export default StoreWrappedApp;
