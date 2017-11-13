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
  const initialState = Immutable.Map({
      notifications: []
  });
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<NotificationCenter store={store} navigation={{goBack: jest.fn()}} />);
  });

  it('should render one msg', () => {
    // store.dispatch(actions.addNotification("Hola"))
    // console.log("state msg: ", wrapper.state('msg').text())
    // console.log(store.dispatch(actions.addNotification("Hola")))
    // console.log("=======", wrapper.dive().find('Text').children().at(0).text())
    // store.dispatch(actions.addNotification("Hola"))
    // expect(wrapper.find('Text').children().at(0).text()).toEqual("Hola")
    // // return store.dispatch(actions.addNotification("Hola")).then(() => {
    // //   expect(wrapper.find('Text').children().at(0).text()).toEqual(["Hola"])
    // // });
  });

});
