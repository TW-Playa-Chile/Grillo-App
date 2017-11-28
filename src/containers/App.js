import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler, View, Dimensions, StyleSheet } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import { connect } from 'react-redux';
import AppNavigator from '../navigator';
import Notifications from './Notifications';
import ModalClose from './../components/ModalClose';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: win.width,
    height: win.height,
  }
});

@connect(
  state => ({ nav: state.nav, modals: state.modals }),
  dispatch => ({ dispatch }),
)

export default class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.dispatch(NavigationActions.back());
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    const { dispatch, nav, modals } = this.props;
    return (
      <View style={styles.container}>
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        <Notifications />
        <ModalClose modals={modals} />
      </View>
    );
  }
}
