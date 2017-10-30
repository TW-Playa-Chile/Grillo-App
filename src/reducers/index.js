import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import nav from './nav';
import habits from './habits';
import notifications from './notifications';

const config = {
  key: 'root',
  storage,
}

export default persistCombineReducers(config, {
  nav,
  habits,
  notifications
});
