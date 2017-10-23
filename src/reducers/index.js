import { combineReducers } from 'redux';
import nav from './nav';
import habits from './habits';
import notifications from './notifications';

export default combineReducers({
  nav,
  habits,
  notifications
});
