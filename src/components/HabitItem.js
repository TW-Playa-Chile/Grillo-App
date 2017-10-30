import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Counter from './../components/Counter';
import { COLOR_PRIMARY, COLOR_SECONDARY, BORDER_RADIUS, FONT_NORMAL, FONT_BOLD } from './../styles/common';

const styles = StyleSheet.create({
  button: {
    // paddingTop: 5,
    // paddingBottom:5,
    // paddingLeft: 5,
    paddingRight: 2,
    margin: '5%',
    backgroundColor: COLOR_PRIMARY,
    borderRadius: BORDER_RADIUS,
  },
})

export default class HabitItem extends Component {
  static propTypes = {
    habit: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      // time: Date.now(),
    }
  }

  stopCounter = () => {
    console.log("kjsaghdfjhadgsu")
  }

  render() {
    const { habit, index } = this.props;
    return (
      <ListItem
        title={habit.name}
        leftIcon={<Button icon={{name: 'stop', type: 'font-awesome'}} buttonStyle={styles.button} onPress={() => this.stopCounter()} />}
        badge={{element: <Counter startDate={habit.startDate} status={habit.status} />}}
      />
    )
  }
}
