import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Linking, ScrollView} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Row, Col} from 'react-native-easy-grid';
import {View, Text, Avatar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

function CustomDrawerContent(props) {
  const [avatar, setAvatar] = useState(
    'https://img.icons8.com/pastel-glyph/2x/person-male.png',
  );
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Row>
          <Col style={{width: 'auto', paddingRight: 8, marginLeft: 6}}>
            <Avatar.Image
              style={{backgroundColor: 'white'}}
              source={{uri: avatar}}
            />
          </Col>
          <Col>
            <Title style={{color: 'white'}}>{displayName || 'jyoti'}</Title>
            <Text style={{color: 'white'}}>{email || 'jyoti@email.com'}</Text>
          </Col>
        </Row>
      </SafeAreaView>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* <View> */}
      <Row style={{justifyContent: 'center', alignItems: 'center'}}>
        <Col style={{width: 'auto'}}>
          <Icon name="arrow-forward" size={35} color="grey" />
        </Col>
        <Col style={{marginLeft: 10}}>
          <Text style={{fontSize: 25, color: 'grey'}}>Sign out</Text>
        </Col>
      </Row>
      {/* </View> */}
    </SafeAreaProvider>
    // <DrawerContentScrollView>
    //   <DrawerItemList {...props} />
    //   <DrawerItem
    //     label="attitude"
    //     onPress={() => Linking.openURL('https://google.co.in')}
    //   />
    // </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
