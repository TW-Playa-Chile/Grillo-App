import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import { Image, Dimensions, StyleSheet, ScrollView } from 'react-native';

import HabitItem from './../components/HabitItem';

import { stopHabit } from '../actions/habits';
import { addNotification } from '../actions/notifications';
import { addModal } from '../actions/modals';
import NO_HABITS_IMAGE from './../images/no_habits.png';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 0,
    alignSelf: 'stretch',
    width: win.width * 0.9,
    height: win.height * 0.6,
  },
  scrollbox: {
    height: win.height * 0.62,
  }
});

const renderHabitItem = (habit, toStopHabit, toAddNotification, index) => (
  <HabitItem key={index} habit={habit} toStopHabit={toStopHabit} toAddNotification={toAddNotification} />
);

export const HabitList = (props) => {
  const { habits, toStopHabit, toAddNotification } = props;

  if (habits.length > 0) {
    return (
      <ScrollView style={styles.scrollbox}>
        <List>
          {habits.map((habit, index) => renderHabitItem(habit, toStopHabit, toAddNotification, index))}
        </List>
      </ScrollView>
    );
  }

  return (<Image
    style={styles.image}
    resizeMode="contain"
    source={NO_HABITS_IMAGE}
  />);
};

HabitList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.object).isRequired,
  toStopHabit: PropTypes.func.isRequired,
  toAddNotification: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  habits: state.habits
});

const mapDispatchToProps = dispatch => ({
  toStopHabit: (habit) => {
    dispatch(stopHabit(habit));
    dispatch(addModal('close_habit'));
  },
  toAddNotification: (message, color) => {
    dispatch(addNotification(message, color));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);
