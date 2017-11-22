import React from 'react';
import { Text } from 'react-native';
import Enzyme, { shallow, mount } from 'enzyme';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Counter from './../Counter';

describe('Counter', () => {
  const fiveDaysAgo = moment().subtract(5, 'd').format();
  const yesterday = moment().subtract(1, 'd').format();

  describe('when there is not end date', () => {
    it('adds a badge with number of days since start date of habit', () => {
      const wrapper = shallow(<Counter startDate={fiveDaysAgo}/>)
      const badge = wrapper.find("Badge").at(0)
      expect(badge.prop("value")).toBe("5 días")
    });
  })

  describe('when there is an end date', () => {
    it('adds a badge with number of days between start and end', () => {
      const wrapper = shallow(<Counter startDate={fiveDaysAgo} endDate={yesterday} />)
      const badge = wrapper.find("Badge").at(0)
      expect(badge.prop("value")).toBe("4 días")
    });
  })
});
