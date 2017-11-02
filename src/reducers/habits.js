
import Immutable from 'immutable';
import { status } from './../constants/habit';
import { insertItem } from './../helpers/arrayMethods';

export const initialState = Immutable.Map({
    habits: []
});

/* Our main reducer */

export default (state = initialState, action) => {
  const prevState = Immutable.Map(state).get('habits');
  switch (action.type) {
    case 'clean_habits':
      return initialState;
    case 'add_habit':
      const newState = insertItem(prevState, action)
      return Immutable.Map(state)
        .set('habits', newState);
    default:
      return state

  }
};
