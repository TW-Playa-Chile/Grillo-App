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