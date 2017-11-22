import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Text } from 'react-native-elements';
import moment from 'moment';
import { COLOR_SECONDARY } from './../styles/common';

export default class Counter extends Component {
  static propTypes = {
    startDate: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
    this.timeBadge = this.timeBadge.bind(this);
    this.statusColor = this.statusColor.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timeBadge(startDate, endDate) {
    const start = moment(startDate);
    const end = endDate ? moment(endDate) : moment().format();
    const diff = Math.abs(start.diff(end, 'days'));
    return `${diff} días`;
  }

  statusColor(status) {
    switch (status) {
      case 'active':
        return COLOR_SECONDARY;
      case 'inactive':
        return 'red';
    }
  }

  render() {
    const { startDate, endDate, status } = this.props;
    return (
      <Badge containerStyle={{ backgroundColor: this.statusColor(status) }} value={this.timeBadge(startDate, endDate)} />
    );
  }
}
