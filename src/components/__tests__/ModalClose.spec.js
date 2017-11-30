import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as actions from './../../actions/modals';
import { Habit } from '../../constants/habit';
import ModalClose from './../ModalClose';

Enzyme.configure({ adapter: new Adapter() });

describe('ModalClose component', () => {
  let component;
  let habitModal;

  beforeEach(() => {
    component = shallow(<ModalClose modals={[]} toAddNotification={jest.fn()} nav={{ goBack: jest.fn() }} />);
    habitModal = actions.addModal('close_habit', new Habit('Habit One')).payload;
  });

  it('should render component', () => {
    expect(component).toBeDefined();
  });

  it('should be closed on mount', () => {
    expect(component.state().isOpen).toBe(false);
  });

  it('should open the modal', () => {
    component.instance().showModal(habitModal);

    expect(component.state().isOpen).toBe(true);
  });

  it('should close modal pressing the close icon', () => {
    const modalIcon = component.at(0).props().backdropContent;
    component.instance().showModal(habitModal);
    modalIcon.props.onPress();

    expect(component.state().isOpen).toBe(false);
  });
});
