
import Immutable from 'immutable';

const initialState = Immutable.Map({ 
    habits: [
        {name: 'no fumar', lastTimestamp: '2017-07-19T12:59-0500'},
        {name: 'beber agua', lastTimestamp: '2017-08-19T12:59-0500'},
        {name: 'correr', lastTimestamp: '2017-09-19T12:59-0500'}
    ] 
});

export default (state = initialState, action) => {
  console.log("@@@@@", action.type); 
  return state;
//   const reduceFn = actionsMap[action.type];
//   if (!reduceFn) return state;
//   return reduceFn(state, action);
};
