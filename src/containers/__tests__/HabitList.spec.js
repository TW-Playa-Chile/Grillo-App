import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { HabitList } from './../HabitList';
import { Habit } from '../../constants/habit';

Enzyme.configure({ adapter: new Adapter() });

const habits = [
  new Habit('Habit One'),
  new Habit('Habit Two'),
  new Habit('Habit Three')
];

it('should renders component', () => {
  const component = shallow(<HabitList habits={habits} toStopHabit={() => { }} toAddNotification={() => { }} />);

  expect(component).toBeDefined();
});

it('should display all habit itens', () => {
  const component = shallow(<HabitList habits={habits} toStopHabit={() => { }} toAddNotification={() => { }} />);

  expect(component.find('HabitItem').length).toBe(3);
});

it('should display image when there is no habits', () => {
  const component = shallow(<HabitList habits={[]} toStopHabit={() => { }} toAddNotification={() => { }} />);

  expect(component.find('Image').exists()).toBeTruthy();
});
