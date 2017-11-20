import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import * as NotificationActions from './../actions/notifications';
import { COLOR_SECONDARY, FONT_NORMAL } from './../styles/common';

const DELAY_TIME = 3000;

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  notificationBox: {
    width: win.width,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  notificationGreen: {
    width: win.width,
    height: 40,
    justifyContent: 'center',
    backgroundColor: COLOR_SECONDARY,
    position: 'absolute',
    bottom: 0,
  },
  notificationRed: {
    width: win.width,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
  notificationMessage: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    ...FONT_NORMAL,
  }
});

@connect(
  state => ({ notifications: state.notifications }),
  dispatch => bindActionCreators(NotificationActions, dispatch),
)

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      color: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    // get last notification
    let lastMsg = nextProps.notifications.pop();
    if (lastMsg)
      this.showNotification(lastMsg);
  }

  showNotification(notification) {
    this.setState({
      msg: notification.msg,
      color: notification.color
    });
    // show message for 3 seconds
    setTimeout(() => {
      this.setState({
        msg: '',
        color: ''
      });
    }, DELAY_TIME);
  }

  render() {
    const { msg, color } = this.state;
    const { notifications } = this.props;

    return (
      <View style={ styles.notificationBox }>
        { msg.length>0 &&
          <View style={ (color == "green") ? styles.notificationGreen : styles.notificationRed }>
            <Text style={ styles.notificationMessage }>{ msg }</Text>
          </View>
        }
      </View>
    )
  }

}
