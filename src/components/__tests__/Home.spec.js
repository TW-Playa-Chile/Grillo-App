import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './../Home';

Enzyme.configure({ adapter: new Adapter() });

it('should renders component', () => {
  const component = shallow(<Home navigation={{}} />);

  expect(component).toBeDefined();
});

it('should display habit list', () => {
  const component = shallow(<Home navigation={{}} />);

  expect(component.find('Connect(HabitList)').exists()).toBeTruthy();
});
