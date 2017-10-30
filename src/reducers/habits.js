
import Immutable from 'immutable';
import { status } from './../constants/habit';
import { insertItem } from './../helpers/arrayMethods';

export const initialState = Immutable.Map({
    habits: [
        {name: 'no comeras', startDate: '2017-10-10T12:59-0500', endDate: null, status: status.ACTIVE},
        {name: 'no beberas', startDate: '2017-10-14T12:59-0500', endDate: null, status: status.INACTIVE},
        {name: 'no bailaras', startDate: '2017-10-16T12:59-0500', endDate: null, status: status.REACTIVATED}
    ]
});

/* Our main reducer */

export default (state = initialState, action) => {
  const prevState = state.get('habits');
  switch (action.type) {
    case 'add_habit':
        const newState = insertItem(prevState, action)
        return state
          .set('habits', newState);

    default:
      return state

  }
};
