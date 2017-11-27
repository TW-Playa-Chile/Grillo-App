import { combineReducers } from 'redux';
import nav from './nav';
import habits from './habits';
import notifications from './notifications';
import modals from './modals';

export default combineReducers({
  nav,
  habits,
  notifications,
  modals,
});
