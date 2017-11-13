import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import * as NotificationActions from './../actions/notifications'

@connect(
  state => ({ notifications: state.notifications }),
  dispatch => bindActionCreators(NotificationActions, dispatch),
)

export default class NotificationCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'nada',
    }
  }

  componentWillReceiveProps(nextProps) {
    let lastMsg = Immutable.Map(nextProps.notifications).get('notifications').pop();
    if (lastMsg)
      this.showNotification(lastMsg);
  }

  showNotification(msg) {
    console.log("###", msg);
    this.setState({ msg })
  }

  render() {
    const { msg } = this.state;
    const { notifications } = this.props;

    return (<Text>{msg}</Text>)
  }

}
