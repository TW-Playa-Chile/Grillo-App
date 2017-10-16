
import Immutable from 'immutable';

const initialState = Immutable.Map({ 
    habits: [
        {name: 'no fumar', lastTimestamp: '2017-07-19T12:59-0500'},
        {name: 'beber agua', lastTimestamp: '2017-08-19T12:59-0500'},
        {name: 'correr', lastTimestamp: '2017-09-19T12:59-0500'}
    ] 
});

/*
* Using Inmutable update patterns:
* https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md#inserting-and-removing-items-in-arrays
*/

insertItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.name, 0, action.payload);
    return newArray;
}

removeItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.name, 1);
    return newArray;
}

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
