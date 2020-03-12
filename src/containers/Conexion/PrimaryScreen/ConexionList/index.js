import React, {PureComponent} from 'react';
import {PAGE_CONFIG} from '../../constants';
import {Animated, Text, FlatList} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {Card, Subheading, Divider} from 'react-native-paper';
import RenderIndListItem from './RenderIndListItem';

const ITEM_HEIGHT = 70;

class ConexionList extends PureComponent {
  state = {
    pageSize: PAGE_CONFIG.pageSize,
    pageNumber: PAGE_CONFIG.pageNumber,
    refreshing: false,
    springValue: new Animated.Value(0),
  };

  handleLoadMoreIndList = () => {
    const {pageNumber} = this.state;
    const {searchText} = this.props;
    this.setState(
      {
        pageNumber: pageNumber + 1,
      },
      () => {
        if (!searchText) {
          this.loadMoreIndConexion();
        }
      },
    );
  };
  componentDidMount = () => {
    this._springAnimation();
  };
  _springAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      easing: Easing.linear,
      delay: 1000,
    }).start();
  };
  handleIndListRefresh = () => {
    this.setState(
      {
        pageNumber: 1,
        refreshing: true,
      },
      () => {
        this.loadMoreIndConexion();
      },
    );
  };
  loadMoreIndConexion = () => {
    const initialPage = {
      pageSize: this.state.pageSize,
      pageNumber: this.state.pageNumber,
    };
    this.props.fetchIndConexion(initialPage);
    this.setState({
      refreshing: false,
    });
  };
  renderListEmpty = () => {
    const {searchText} = this.props;
    return (
      <Card>
        <Card.Content>
          {searchText ? (
            <Text>No results will be constructed with NoResults component</Text>
          ) : (
            <Text>Empty list, will be created one EmptyList component</Text>
          )}
        </Card.Content>
      </Card>
    );
  };
  renderFooter = () => {
    const {conexionListData} = this.props;
    if (conexionListData && conexionListData.length > 0) {
      return (
        <Card>
          <Card.Content>
            <Subheading>End of list</Subheading>
          </Card.Content>
        </Card>
      );
    }
    return null;
  };
  // handleOrgListRefresh
  // handleOrgMoreConexion
  // handleLoadMoreOrgList
  throwError = () => {
    throw new Error('I Crashed!');
  };
  getRenderPart = () => {
    const {indSelected, onPressItem} = this.props;
    console.log(
      'render getRenderPart function  --> conexionListData --->',
      conexionListData,
    );
    const {conexionListData} = this.props;
    if (indSelected) {
      return (
        <FlatList
          data={conexionListData}
          renderItem={({item, index}) => (
            <RenderIndListItem
              item={item}
              delay={index % 10}
              onPressItem={onPressItem}
            />
          )}
          keyExtractor={item => item.ConexionId.toString()}
          ListEmptyComponent={this.renderListEmpty}
          //   onRefresh={this.handleIndListRefresh}
          onEndReached={this.handleLoadMoreIndList}
          onEndReachedThreshold={0.01}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          ItemSeparatorComponent={() => <Divider />}
        />
      );
    }
    // write for RenderOrgListItem
  };
  render() {
    return this.getRenderPart();
  }
}

export default ConexionList;
