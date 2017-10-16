import { combineReducers } from 'redux';
import counter from './counter';
import nav from './nav';
import habits from './habits';

export default combineReducers({
  counter,
  nav,
  habits,
});
