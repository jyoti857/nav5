import React, {useState, useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import ConexionList from './ConexionList';
import {saveSelectedConexionId} from '../actions';
import {connect} from 'react-redux';
const PrimaryScreen = props => {
  const [indSelected, setIndSelected] = useState(true);
  const [orgSelected, setOrgSelected] = useState(false);
  const [conexionList, setConexionList] = useState([]);
  const [firstQuery, setFirstQuery] = useState('');

  const {
    indConexions,
    orgConexions,
    loaderState,
    dispatchSetConexionId,
  } = props;

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const getConexionList = id => {
    if (indSelected && conexionList.length === 0) {
      return indConexions;
    }
    if (orgSelected && conexionList.length === 0) {
      return orgConexions;
    }
  };
  const handleConexionSelect = id => {
    dispatchSetConexionId(id);
    navigation.navigate('ConexionSecondaryScreen', {
      selectedValue: indSelected,
      selecetedId: id,
    });
  };
  return (
    <SafeAreaView>
      <ConexionList
        conexionListData={getConexionList()}
        onPressItem={handleConexionSelect}
        indSelected={indSelected}
        loader={loaderState}
        searchText={firstQuery}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  dispatchSetConexionId: id => dispatch(saveSelectedConexionId(id)),
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PrimaryScreen);

export default PrimaryScreen;
