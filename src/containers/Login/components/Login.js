import React from 'react';
import {compose} from 'redux';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {connect} from 'react-redux';
import {Row, Col} from 'react-native-easy-grid';
import AsyncStorage from '@react-native-community/async-storage';
// import LinearGradient from 'react-native-linear-gradient';
import {Card, Subheading} from 'react-native-paper';
import LoginForm from './LoginForm';
import {getAccessToken, setLoaderValue, setAccessToken} from '../actions';
import {setToastMessage, setToastVisibility} from '../../../app/rootActions';
import {createStructuredSelector} from 'reselect';
import {
  selectRootAccessToken,
  selectGlobalLoader,
  selectToastVisibility,
  selectToastData,
} from '../../../app/rootSelector';
import {GET_ACCESS_TOKEN} from '../constants';

const initial = {
  loginemail: '',
  loginpassword: '',
};

const Login = props => {
  const [loaderTitle] = React.useState('Sigin_in');
  const [loaderMessage] = React.useState('isdj');
  const [fadeValue] = React.useState('');
  const {accessToken, getUserAccessTone} = props;
  console.log('access token ===>', accessToken);

  //   React.useEffect(() => {
  //     Animated.sequence([
  //       Animated.delay(300),
  //       Animated.timing(fadeValue, {
  //         toValue: 1,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       }),
  //     ]).start();
  //   });

  //   React.useEffect(() => {
  //     const setToken = async () => {
  //       if (accessToken !== null && accessToken !== '') {
  //         await AsyncStorage.setItem('@appusertoken', accessToken);
  //         // signIn(accessToken);
  //       }
  //     };
  //     setToken();
  //   }, [accessToken]);

  const handleUserLogin = (userName, password) => {
    console.log('getUserAccessTone props --->', getUserAccessTone);
    getUserAccessTone({userName, password});
    // dispatch({type: GET_ACCESS_TOKEN, userName, password});
  };

  return (
    // <LinearGradient>
    <KeyboardAvoidingView style={{flex: 1}}>
      <Row size={0.5} />
      <Row>
        <Col>
          <Animated.View>
            <Card>
              <Card.Content>
                <View>
                  <Subheading>Sign in to your account</Subheading>
                </View>
                <LoginForm onLogin={handleUserLogin} initialValues={initial} />
              </Card.Content>
            </Card>
          </Animated.View>
        </Col>
      </Row>
      <Row size={0.5} />
    </KeyboardAvoidingView>
    // </LinearGradient>
  );
};
const mapStateToProps = createStructuredSelector({
  accessToken: selectRootAccessToken(),
  loaderState: selectGlobalLoader(),
  toastVisible: selectToastVisibility(),
  toast: selectToastData(),
});

const mapDispatchToProps = dispatch => ({
  getUserAccessTone: ({userName, password}) =>
    dispatch(getAccessToken(userName, password)),
  setLoaderState: value => dispatch(setLoaderValue(value)),
  setLoginAccessTokenDispatch: value => dispatch(setAccessToken(value)),
  setRootAccessTokenDispatch: message => dispatch(setToastMessage(message)),
  setToastVisibilityDispatch: value => dispatch(setToastVisibility(value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
