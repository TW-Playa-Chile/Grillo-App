import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ModalClose from './../ModalClose';

Enzyme.configure({ adapter: new Adapter() });

describe('ModalClose component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ModalClose modals={[]} />);
    jest.useFakeTimers();
  });

  it('should render component', () => {
    expect(component).toBeDefined();
  });

  it('should be closed on mount', () => {
    expect(component.state().isOpen).toBe(false);
  });

  it('should open when showing a modal', () => {
    component.instance().showModal();

    expect(component.state().isOpen).toBe(true);
  });

  it('should close after 5 seg', () => {
    component.instance().showModal();

    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(5000);
  });
});
