import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Text } from 'react-native-elements';
import 'moment/locale/es';
import moment from 'moment';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, FONT_NORMAL, FONT_BOLD } from './../styles/common';

export default class Counter extends Component {
  static propTypes = {
    startDate: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timeBadge = (startDate, endDate) => {
    if (!endDate) {
      let a = moment(startDate);
      let b = moment().format();
      let diff = a.diff(b, 'days')
      return (diff==0) ? 'menos de un día' : diff+" días"
    } else {
      let a = moment(startDate);
      let b = moment(endDate);
      let diff = a.diff(b, 'days')
      return (diff==0) ? 'menos de un día' : diff+" días"
    }
  }

  statusColor = (status) => {
    switch (status) {
      case 'active':
        return COLOR_SECONDARY;
      case 'inactive':
        return 'red';
      case 'reactivated':
        return 'orange';
    }
  }

  render() {
    const { startDate, endDate, status } = this.props;
    return (
      <Badge containerStyle={{ backgroundColor: this.statusColor(status)}} value={this.timeBadge(startDate, endDate)} />
    )
  }
}
