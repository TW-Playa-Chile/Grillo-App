import React from 'react';
import { Text } from 'react-native';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Immutable from 'immutable';
Enzyme.configure({ adapter: new Adapter() });
import NotificationCenter from './../NotificationCenter';
import * as actions from './../../actions/notifications';

describe('notificationCenter component', () => {
  const initialState = {
      notifications: []
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<NotificationCenter store={store} navigation={{goBack: jest.fn()}} />);
  });

  it('should render one msg', () => {
    store.dispatch(actions.addNotification('Hola'));
    const action = store.getActions();
    const expectedAction = [{
      type: "add_notification",
      payload: "Hola"
    }];
    expect(action).toEqual(expectedAction);
  });

});
