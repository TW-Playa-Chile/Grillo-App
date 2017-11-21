import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HabitItem from './../HabitItem';
import StopButton from './../StopButton';

Enzyme.configure({ adapter: new Adapter() });

describe('HabitItem', () => {
  const habit = {
    index: 'bdab7bbb-b469-7468-fe4c-0971b1a13abe',
    name: 'Estudiar',
    startDate: '2017-11-21T16:58:40-03:00',
    endDate: '2017-11-21T16:59:02-03:00',
    status: 'inactive'
  };

  it('should render component', () => {
    const component = shallow(<HabitItem habit={habit} toAddNotification={jest.fn()} toStopHabit={jest.fn()} navigation={jest.fn()} />);

    expect(component).toBeDefined();
  });

  it('should renders a disabled stopbutton if habit is inactive', () => {
    const mockToStopHabit = jest.fn();
    const component = shallow(<HabitItem habit={habit} toAddNotification={jest.fn()} toStopHabit={mockToStopHabit} navigation={jest.fn()} />);
    const listItem = component.find('ListItem');
    const stopButton = <StopButton enabled={false} onStop={() => mockToStopHabit} />;

    expect(JSON.stringify(listItem.props().leftIcon)).toEqual(JSON.stringify(stopButton));
  });
})
