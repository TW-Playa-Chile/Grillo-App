import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Icon } from 'react-native-elements';
import * as HabitActions from '../actions/habits';
import { COLOR_PRIMARY, FONT_BOLD } from './../styles/common';

@connect(
  null,
  dispatch => bindActionCreators(HabitActions, dispatch),
)

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    const { cleanHabits } = props;
    this.state = {
      counter: 0,
    }

    this.cleanHabits = () => cleanHabits();
  }

  cleanHabits = () => {
    this.setState({counter: this.state.counter + 1}, () => {
      if (this.state.counter > 6) {
        this.cleanHabits();
      }
    });
  }

  deleteButton() {
    return <Icon
              name = "delete"
              onPress = {this.cleanHabits}
              color = "#FFFFFF"
            />
  }

  render() {
    return (
      <Header
        backgroundColor={COLOR_PRIMARY}
        centerComponent={{ text: 'Pepe Grillo', style: { ...FONT_BOLD, color: '#fff' } }}
        rightComponent={this.deleteButton()}
      />
    )
  }
}
