import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import Counter from './../components/Counter';
import StopButton from './StopButton';

const HabitItem = (props) => {
  const stopCounterAndNotify = (habit) => {
    props.toStopHabit(habit);
    props.toAddNotification(`El hábito ${habit.name} se ha detenido`);
  };

  const { habit } = props;

  return (
    <ListItem
      title={habit.name}
      leftIcon={<StopButton enabled={habit.status === 'active'} onStop={() => stopCounterAndNotify(habit)} />}
      badge={{ element: <Counter startDate={habit.startDate} endDate={habit.endDate} status={habit.status} /> }}
    />
  );
};

HabitItem.propTypes = {
  toStopHabit: PropTypes.func.isRequired,
  toAddNotification: PropTypes.func.isRequired,
  habit: PropTypes.object.isRequired
};

export default HabitItem;
