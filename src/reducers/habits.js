
import { status } from './../constants/habit';
import { insertItem, updateObjectInArray } from './../helpers/arrayMethods';

export const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'clean_habits':
      return initialState;
    case 'add_habit':
      return insertItem(state, action)
    case 'stop_habit':
      return updateObjectInArray(state, action)
    default:
      return state;

  }
};
