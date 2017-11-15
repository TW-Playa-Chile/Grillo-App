import React from 'react';
import { Text } from 'react-native';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });
import Notifications from './../Notifications';
import * as actions from './../../actions/notifications';

describe('notifications component', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Notifications store={store} navigation={{goBack: jest.fn()}} />).dive();
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

  it('should add a notification', () => {
    wrapper.instance().showNotification("Hola");
    expect(wrapper.state('msg')).toEqual("Hola");
  })

});
