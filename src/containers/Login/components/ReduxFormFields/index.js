import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput, HelperText} from 'react-native-paper';

const EmailInput = props => {
  const {
    input,
    label,
    required,
    helperText,
    multiline,
    disabled,
    defaultValue,
    meta: {error, touched},
    ...inputProps
  } = props;
  let hasError = false;
  if (required && touched && error) {
    hasError = true;
  }
  return (
    <View>
      <TextInput
        {...inputProps}
        label={required ? `${label}*` : label}
        onChange={input.onChange}
        onBlur={input.onBlur}
        value={input.value || defaultValue}
        style={{width: '100%'}}
        error={hasError}
        disabled={disabled}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
        placeholderTextColor="#000"
        blurOnSubmit={false}
        mode="flat"
      />
      {required && hasError ? (
        <HelperText type="error" visible={hasError}>
          {helperText || error || `${label} is required`}
        </HelperText>
      ) : null}
    </View>
  );
};
EmailInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChangeTrigger: PropTypes.func,
};

const PasswordInput = props => {
  const {
    input,
    label,
    required,
    helperText,
    multiline,
    disabled,
    defaultValue,
    meta: {error, touched},
    ...inputProps
  } = props;
  let hasError = false;
  if (required && touched && error) {
    hasError = true;
  }
  return (
    <View>
      <TextInput
        {...inputProps}
        label={required ? `${label}*` : label}
        onChange={input.onChange}
        onBlur={input.onBlur}
        value={input.value || defaultValue}
        style={{width: '100%'}}
        error={hasError}
        disabled={disabled}
        returnKeyType="go"
        placeholderTextColor="#000"
        secureTextEntry
        mode="flat"
      />
      {required && hasError ? (
        <HelperText type="error" visible={hasError}>
          {helperText || error || `${label} is required`}
        </HelperText>
      ) : null}
    </View>
  );
};

PasswordInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  multiline: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChangeTrigger: PropTypes.func,
};

export {EmailInput, PasswordInput};
