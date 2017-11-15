import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import * as NotificationActions from './../actions/notifications';
import { COLOR_SECONDARY, FONT_NORMAL } from './../styles/common';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  notificationBox: {
    width: win.width,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  notification: {
    width: win.width,
    height: 40,
    justifyContent: 'center',
    backgroundColor: COLOR_SECONDARY,
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

export default class NotificationCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    // get last notification
    let lastMsg = nextProps.notifications.pop();
    if (lastMsg)
      this.showNotification(lastMsg);
  }

  showNotification(msg) {
    this.setState({ msg });
    // show message for 3 seconds
    setTimeout(() => {
      this.setState({ msg: '' });
    }, 3000);
  }

  render() {
    const { msg } = this.state;
    const { notifications } = this.props;

    return (
      <View style={styles.notificationBox}>
        { msg.length>0 &&
          <View style={styles.notification}>
            <Text style={styles.notificationMessage}>{msg}</Text>
          </View>
        }
      </View>
    )
  }

}
