import { Habit, status } from './../constants/habit';
import moment from 'moment';

export function addHabit(name) {
  let habit = new Habit(name);
  // console.log(habit);
  return {
    type: 'add_habit',
    payload: habit
  };
}

export function stopHabit(habit) {
  let stoppedHabit = habit;
  stoppedHabit.status = status.INACTIVE;
  stoppedHabit.endDate = moment().format();
  // console.log(stoppedHabit);
  return {
    type: 'stop_habit',
    payload: stoppedHabit
  }
}

export function cleanHabits() {
  // console.log("cleaning habits");
  return {
    type: 'clean_habits'
  }
}
