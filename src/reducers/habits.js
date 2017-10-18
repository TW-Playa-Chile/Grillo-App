
import Immutable from 'immutable';

const initialState = Immutable.Map({ 
    habits: [
        {name: 'no comeras', lastTimestamp: '2017-10-10T12:59-0500'},
        {name: 'no beberas', lastTimestamp: '2017-10-14T12:59-0500'},
        {name: 'no bailaras', lastTimestamp: '2017-10-16T12:59-0500'}
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
