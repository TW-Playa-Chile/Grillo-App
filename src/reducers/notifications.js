
import Immutable from 'immutable';
import { insertItem } from './../helpers/arrayMethods';

export const initialState = {
    notifications: []
};

/* Our main reducer */

export default (state = initialState, action) => {
  const prevState = state.get('notifications')
  switch (action.type) {
    case 'add_notification':
      const newState = insertItem(prevState, action)
      return newState;
    default:
      return state
  }
};
