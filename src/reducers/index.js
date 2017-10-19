import { combineReducers } from 'redux';
import nav from './nav';
import habits from './habits';

export default combineReducers({
  nav,
  habits,
});
