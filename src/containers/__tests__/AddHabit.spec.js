import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Immutable from 'immutable';
Enzyme.configure({ adapter: new Adapter() });
import AddHabit from './../AddHabit';
import { FormLabel, FormInput, FormValidationMessage, Button, Card } from 'react-native-elements';


describe('components', () => {
    const initialState = Immutable.Map({
        habits: [
            {name: 'no comeras', startDate: '2017-10-10T12:59-0500'},
            {name: 'no beberas', startDate: '2017-10-14T12:59-0500'},
            {name: 'no bailaras', startDate: '2017-10-16T12:59-0500'}
        ]
    });
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<AddHabit store={store} navigation={{goBack: jest.fn()}} />).dive().instance();
    });

    it('should set an error when habit name is absent', () => {
      wrapper.addHabitToStore();
      expect( wrapper.state.habitError ).toBe(true);
    });

    it('should pass if habit has a name', () => {
      wrapper.enterHabit("A");
      wrapper.addHabitToStore();
      expect( wrapper.state.habitError ).toBe(false);
    });

});
;
