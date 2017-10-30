import { Habit, status } from './../constants/habit';

export function addHabit(name) {
  // status: active,
  let habit = new Habit(name);
  console.log(habit);
  return {
    type: 'add_habit',
    payload: habit
  };
}

export function stopHabit(habit) {
  console.log(habit);
  return {
    type: 'stop_habit',
    payload: habit
  }
}
