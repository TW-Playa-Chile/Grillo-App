import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-native-elements';
import 'moment/locale/es';
import moment from 'moment';
import { COLOR_SECONDARY } from './../styles/common';

export default class Counter extends Component {
  static propTypes = {
    startDate: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timeBadge = (startDate, endDate) => {
    if (!endDate) {
      const a = moment(startDate);
      const b = moment().format();
      const diff = a.diff(b, 'days');
      return (diff === 0) ? 'menos de un día' : `${diff} días`;
    }
    const a = moment(startDate);
    const b = moment(endDate);
    const diff = a.diff(b, 'days');
    return (diff === 0) ? 'menos de un día' : `${diff} días`;
  }

  statusColor = (status) => {
    switch (status) {
      case 'active':
        return COLOR_SECONDARY;
      case 'inactive':
        return 'red';
      case 'reactivated':
        return 'orange';
      default:
        return COLOR_SECONDARY;
    }
  }

  render() {
    const { startDate, endDate, status } = this.props;
    return (
      <Badge containerStyle={{ backgroundColor: this.statusColor(status) }} value={this.timeBadge(startDate, endDate)} />
    );
  }
}
