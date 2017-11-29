import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import { AppWithNavigationState } from './../App';
import Notifications from './../Notifications';
import ModalClose from './../../components/ModalClose';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({ modals: [] });
    wrapper = shallow(<AppWithNavigationState modals={[]} dispatch={jest.fn()} toAddNotification={jest.fn()} store={store} nav={{ goBack: jest.fn() }} />);
  });

  it('should renders component', () => {
    expect(wrapper).toBeDefined();
  });

  it('should renders notifications', () => {
    const component = shallow(<Notifications store={store} toAddNotification={jest.fn()} />);

    expect(component).toBeDefined();
  });

  it('should renders modalsa', () => {
    const component = shallow(<ModalClose modals={[]} toAddNotification={jest.fn()} />);

    expect(component).toBeDefined();
  });
});
