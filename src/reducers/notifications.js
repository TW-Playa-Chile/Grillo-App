
import Immutable from 'immutable';
import { insertItem } from './../helpers/arrayMethods';

export const initialState = Immutable.Map({
    notifications: []
});

/* Our main reducer */

export default (state = initialState, action) => {
  const prevState = state.get('notifications')
  switch (action.type) {
    case 'add_notification':
      const newState = insertItem(prevState, action)
      return state.set('notifications', newState);
    default:
      return state
  }
};
