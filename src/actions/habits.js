import moment from 'moment';
import { Habit, status } from './../constants/habit';

export function addHabit(name) {
  const habit = new Habit(name);
  return {
    type: 'add_habit',
    payload: habit
  };
}

export function stopHabit(habit) {
  const stoppedHabit = habit;
  stoppedHabit.status = status.INACTIVE;
  stoppedHabit.endDate = moment().format();
  return {
    type: 'stop_habit',
    payload: stoppedHabit
  };
}

export function cleanHabits() {
  return {
    type: 'clean_habits'
  };
}

export function seeHabit(habit) {
  const seenHabit = habit;
  seenHabit.seen = true;
  return {
    type: 'see_habit',
    payload: seenHabit
  };
}
