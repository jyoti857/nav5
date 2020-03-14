import React, {useState, useEffect} from 'react';
import {Card, Subheading, Title} from 'react-native-paper';

const avatar = require('../../../../assets/icons/indavatar.png');

import {
  ImageBackground,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

const getIndSubDetails = conexion => {
  let sub = '';
  if (conexion.Organization) {
    sub += `${conexion.Organization.trim()}`;
  }
  if (conexion.BusinessEmailAddress) {
    if (sub) {
      sub += ', ';
    }
    sub += `${conexion.BusinessEmailAddress.trim()}`;
  }
  if (conexion.BusinessTelephoneNumber) {
    if (sub) {
      sub += ', ';
    }
    sub += `${conexion.BusinessTelephoneNumber.trim()}`;
  }
  return sub;
};

const getIndAvatarText = (firstName, lastName) => {
  if (firstName && lastName) {
    const fn = firstName.toUpperCase().split('')[0];
    const ln = lastName.toUpperCase().split('')[0];
    return fn + ln;
  }
  return '';
};

const RenderIndListItem = props => {
  const [pressValue] = useState(new Animated.Value(1));
  const [fadeValue] = useState(new Animated.Value(0));
  const {delay, onPressItem, item} = props;

  function _onPress() {
    onPressItem(item.ConexionId);
  }
  function animateIn() {
    Animated.timing(pressValue, {
      toValue: 0.9,
      duration: 20,
    }).start();
  }
  function animateOut() {
    Animated.timing(pressValue, {
      toValue: 1,
      duration: 20,
    }).start();
  }
  useEffect(() => {
    const calculatedDelay = delay * 100;
    Animated.sequence([
      Animated.delay(calculatedDelay),
      Animated.timing(fadeValue, {
        toValue: 1,
        easing: Easing.linear,
      }),
    ]).start();
  });

  return (
    <TouchableWithoutFeedback
      onPress={_onPress}
      onPressIn={animateIn}
      onPressOut={animateOut}>
      <Animated.View
        style={[{transform: [{scale: pressValue}]}, {opacity: fadeValue}]}>
        <Card
          key={item.ConexionId}
          // style={ListCardStyle.root}
        >
          <Card.Title
            title={<Subheading>{item.DisplayName.trim()} and jyoti</Subheading>}
            subtitle={getIndSubDetails(item)}
            left={leftProps => (
              <ImageBackground
                source={avatar || null}
                // style={AvatarStyle.root}
                imageStyle={{borderRadius: 25}}
                {...leftProps}>
                <Title style={{color: '#000'}}>
                  {getIndAvatarText(item.Name.trim(), item.lastName.trim())}
                </Title>
              </ImageBackground>
            )}
          />
        </Card>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
export default RenderIndListItem;
