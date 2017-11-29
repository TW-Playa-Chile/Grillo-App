import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ModalClose from './../ModalClose';

Enzyme.configure({ adapter: new Adapter() });

describe('ModalClose component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ModalClose modals={[]} toAddNotification={jest.fn()} nav={{ goBack: jest.fn() }} />);
  });

  it('should render component', () => {
    expect(component).toBeDefined();
  });

  it('should be closed on mount', () => {
    expect(component.state().isOpen).toBe(false);
  });

  it('should open the modal', () => {
    component.instance().showModal();

    expect(component.state().isOpen).toBe(true);
  });

  it('should close modal pressing the close icon', () => {
    const modalIcon = component.at(0).props().backdropContent;
    component.instance().showModal();
    modalIcon.props.onPress();

    expect(component.state().isOpen).toBe(false);
  });
});
