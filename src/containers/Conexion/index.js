import React, {useState} from 'react';
import {INDIVIDUAL, ORGANIZATION} from './constants';
import {useStatusBarConfiguration} from '../../globalhooks';
import * as Animatable from 'react-native-animatable';
import {withTheme, IconButton, Colors} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';
import {DynamicModuleLoader} from 'redux-dynamic-modules';
import {View, Text} from 'react-native';
import PrimaryScreen from './PrimaryScreen';
import {getConexionModule} from './module';

const ConexionScreen = props => {
  const [title, setTitle] = useState(INDIVIDUAL);
  const [selected, setSelected] = useState(INDIVIDUAL);

  useStatusBarConfiguration();
  const {navigation} = props;
  //   const {isTablet} = props.theme;
  const setTabChange = value => {
    if (value === INDIVIDUAL) {
      setSelected(INDIVIDUAL);
    } else {
      setSelected(ORGANIZATION);
      setTitle(ORGANIZATION);
    }
  };
  navigation.setOptions({
    headerTitle: title,
    headerRight: () => (
      <Animatable.View
        animation="slideInRight"
        duration={2000}
        style={{flexDirection: 'row'}}>
        <IconButton
          icon={() => (
            <FontAwesome5
              name="ac-unit"
              size={20}
              color={selected === ORGANIZATION ? Colors.yellow600 : 'white'}
              //   solid={selected === ORGANIZATION}
            />
          )}
          color={selected === ORGANIZATION ? Colors.yellow600 : 'white'}
          size={30}
          onPress={() => setTabChange(ORGANIZATION)}
        />
      </Animatable.View>
    ),
    headerLeft: () => (
      // !isTablet ?
      <IconButton
        icon={() => <FontAwesome5 name="add-box" size={20} color="white" />}
        color="white"
        size={30}
        onPress={() => navigation.openDrawer()}
      />
    ),
    //   : null,
  });
  return (
    <DynamicModuleLoader modules={[getConexionModule()]}>
      <PrimaryScreen selected={selected} setTabChange={setTabChange} />
    </DynamicModuleLoader>
    // <View>
    //   <Text>Hi this is the new conexion String</Text>
    //   <PrimaryScreen />
    // </View>
  );
};

export default ConexionScreen;
