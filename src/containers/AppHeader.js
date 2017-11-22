import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

    this.cleanHabits = () => cleanHabits();
  }

  render() {
    return (
      <Header
        backgroundColor={COLOR_PRIMARY}
        centerComponent={{ text: 'Pepe Grillo', style: { ...FONT_BOLD, color: '#FFFFFF' } }}
        rightComponent={<Icon name="delete" onPress={this.cleanHabits} color="#FFFFFF" />}
      />
    );
  }
}
