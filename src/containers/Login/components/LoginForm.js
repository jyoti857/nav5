import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Keyboard} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {Button, TouchableRipple} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';

import {EmailInput, PasswordInput} from './ReduxFormFields';

const LoginForm = props => {
  const {submitting, pristine, invalid, handleSubmit, onLogin} = props;

  const _handleUserLogin = values => {
    const valuesForm = JSON.stringify(values, null, 2);
    const objectForm = JSON.parse(valuesForm);
    // Keyboard.dismiss();
    console.log('from _handleUserLogin --->', objectForm);
    // alert(valuesForm);
    onLogin(objectForm.loginemail, objectForm.loginpassword);
  };
  return (
    <View>
      <Field label="email" name="loginemail" component={EmailInput} required />
      <Field
        label="password"
        name="loginpassword"
        component={PasswordInput}
        required
      />
      {/* <TouchableRipple
        rippleColor="rgba(0, 0, 0, .32)"
        style={styles.buttonContainer}
        onPress={handleSubmit(_handleUserLogin)}
        // disabled={pristine || submitting || invalid}
      > */}
      <Button
        icon={() => <FontAwesome name="store" color="#fff" size={20} />}
        mode="contained"
        onPress={handleSubmit(_handleUserLogin)}
        color="#2630a7">
        Login
      </Button>
      {/* </TouchableRipple> */}
    </View>
  );
};

const reduxLoginForm = reduxForm({
  form: 'LOGINFORM',
  //   validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
});
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#07016f',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    height: 40,
    marginHorizontal: 20,
    borderRadius: 5,
    color: '#000',
  },
  buttomContainer: {
    height: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    margin: 10,
  },
});

export default reduxLoginForm(LoginForm);
