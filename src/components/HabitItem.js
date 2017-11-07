import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Counter from './../components/Counter';
import { COLOR_PRIMARY, COLOR_SECONDARY, BORDER_RADIUS, FONT_NORMAL, FONT_BOLD } from './../styles/common';

const styles = StyleSheet.create({
  button: {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
})

export default class HabitItem extends Component {
  static propTypes = {
    habit: PropTypes.object.isRequired,
    toStopHabit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { toStopHabit } = props;

    this.state = {
      // time: Date.now(),
    }

    this.toStopHabit = (habit) => toStopHabit(habit);
  }

  stopCounter = (habit) => {
    this.toStopHabit(habit)
  }

  stopButton = (habit) => {
    return <Icon
              name = 'stop-circle-o'
              type = 'font-awesome'
              color = '#000000'
              iconStyle = {{marginRight: 10, marginLeft: 10}}
              onPress={() => this.stopCounter(habit)}
            />
  }

  render() {
    const { habit, index } = this.props;
    return (
      <ListItem
        title={habit.name}
        leftIcon={this.stopButton(habit)}
        badge={{element: <Counter startDate={habit.startDate} endDate={habit.endDate} status={habit.status} />}}
      />
    )
  }
}
