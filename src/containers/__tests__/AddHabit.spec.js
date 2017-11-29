import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import AddHabit from './../AddHabit';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore([]);
    wrapper = shallow(<AddHabit store={store} navigation={{ goBack: jest.fn() }} />)
      .dive().instance();
  });

  it('should set an error when habit name is absent', () => {
    wrapper.enterHabit('');
    wrapper.addHabitToStore();
    expect(wrapper.state.habitError).toBe(true);
  });

  it('should pass if habit has a name', () => {
    wrapper.enterHabit('Some name');
    wrapper.addHabitToStore();
    expect(wrapper.state.habitError).toBe(false);
  });

  it('should set an error if we pass multiple spaces', () => {
    wrapper.enterHabit('      ');
    wrapper.addHabitToStore();
    expect(wrapper.state.habitError).toBe(true);
  });
});

