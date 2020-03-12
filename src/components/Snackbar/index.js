import React from 'react';
import {Snackbar, Text, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';
import {INFO, ERROR, WARNING, SUCCESS} from '../../utils/constants';
import {setToastMessage, setToastVisibility} from '../../app/rootActions';

const SnackbarCustom = props => {
  const {
    toast,
    toastVisible,
    dispatchToastData,
    dispatchToastVisibility,
  } = props;
  const getMessage = () => {
    if (toast && typeof toast.toastMessage === 'string' && toast) {
      switch (toast.toastType) {
        case INFO: {
          return (
            <Text style={{color: 'white'}}>{toast.toastMessage || 'ewp'}</Text>
          );
        }
        case ERROR: {
          return <Text style={{color: 'white'}}>{toast.toastMessage}</Text>;
        }
        case WARNING: {
          return <Text style={{color: 'orange'}}>{toast.toastMessage}</Text>;
        }
        case SUCCESS: {
          return <Text style={{color: 'green'}}>{toast.toastMessage}</Text>;
        }
        default: {
          return <Text style={{color: 'white'}}>{toast.toastMessage}</Text>;
        }
      }
    }
    return <Text>This returns null from CustomSnackbar</Text>;
  };

  const onToastDismiss = () => {
    const defaultToastData = {
      toastMessge: '',
      toastType: INFO,
    };
    dispatchToastData(defaultToastData);
    dispatchToastVisibility(false);
  };
  return (
    <Snackbar
      visible={toastVisible}
      onDismiss={onToastDismiss}
      action={{label: ''}}
      //   duration={Snackbar.DURATION_MEDIUM}
      style={{background: '#283747', marginBottom: 10, borderRadius: 15}}>
      {/* {getMessage()} */}
      <Text>eprkp</Text>
    </Snackbar>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchToastData: data => dispatch(setToastMessage(data)),
  dispatchToastVisibility: visibility =>
    dispatch(setToastVisibility(visibility)),
});

// export default SnackbarCustom;
