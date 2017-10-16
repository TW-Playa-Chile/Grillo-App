import moment from 'moment';

export function addHabit(name) {
    
    let lastTimestamp = moment().format(); 
    let habit = {
        name: name,
        lastTimestamp: lastTimestamp,
    }
    console.log('adding habit:', habit);
    return {
      type: 'add_habit',
      payload: habit
    };
  }