import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Notifications from './../Notifications';
import * as actions from './../../actions/notifications';

Enzyme.configure({ adapter: new Adapter() });

describe('notifications component', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Notifications store={store} navigation={{ goBack: jest.fn() }} />).dive();
  });

  it('should render one msg', () => {
    store.dispatch(actions.addNotification('Hola', 'green'));
    const action = store.getActions();
    const expectedAction = [{
      type: 'add_notification',
      payload: { msg: 'Hola', color: 'green' }
    }];
    expect(action).toEqual(expectedAction);
  });

  it('should add a notification msg', () => {
    wrapper.instance().showNotification({ msg: 'Hola', color: 'green' });
    expect(wrapper.state('msg')).toEqual('Hola');
  });

  it('should add a green notification', () => {
    wrapper.instance().showNotification({ msg: 'Hola', color: 'green' });
    expect(wrapper.state('color')).toEqual('green');
  });

  it('should add a red notification', () => {
    wrapper.instance().showNotification({ msg: 'Hola', color: 'red' });
    expect(wrapper.state('color')).toEqual('red');
  });
});

