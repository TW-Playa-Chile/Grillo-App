/* eslint global-require: 0 */

import { Platform, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import reducer from './reducers';
import * as actionCreators from './actions/habits';

let composeEnhancers = compose;
if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools)({
    name: Platform.OS,
    ...require('../package.json').remotedev,
    actionCreators,
  });
  /* eslint-enable no-underscore-dangle */
}

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // autoRehydrate()
);


export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  persistStore(store, {
    storage: AsyncStorage,
    // records: [habits],
  }, () => {
    console.log('restored')
  })
  return store;
}
