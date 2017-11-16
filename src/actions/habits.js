import { Habit, status } from './../constants/habit';
import moment from 'moment';

export function addHabit(name) {
  let habit = new Habit(name);
  return {
    type: 'add_habit',
    payload: habit
  };
}

export function stopHabit(habit) {
  let stoppedHabit = habit;
  stoppedHabit.status = status.INACTIVE;
  stoppedHabit.endDate = moment().format();
  return {
    type: 'stop_habit',
    payload: stoppedHabit
  }
}

export function cleanHabits() {
  return {
    type: 'clean_habits'
  }
}
