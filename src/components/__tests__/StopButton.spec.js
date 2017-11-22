import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StopButton from './../StopButton';

Enzyme.configure({ adapter: new Adapter() });

describe('StopButton', () => {
  it('should render component', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled />);

    expect(stopButton).toBeDefined();
  });

  it('should be disabled when enabled property is false', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled={false} />);
    const icon = stopButton.find('Icon');

    expect(icon.props().disabled).toBe(true);
  });

  it('should be enabled when enabled property is true', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled />);
    const icon = stopButton.find('Icon');

    expect(icon.props().disabled).toBe(false);
  });

  it('should have enabled icon when enabeIcon is true', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled />);
    const icon = stopButton.find('Icon');
    const iconNameExpected = 'stop-circle-o';
    const iconTypeExpected = 'font-awesome';

    expect(icon.props().name).toBe(iconNameExpected);
    expect(icon.props().type).toBe(iconTypeExpected);
  });

  it('should have disabled icon when enabled property is false', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled={false} />);
    const icon = stopButton.find('Icon');
    const iconNameExpected = 'circle';
    const iconTypeExpected = 'font-awesome';

    expect(icon.props().name).toBe(iconNameExpected);
    expect(icon.props().type).toBe(iconTypeExpected);
  });

  it('should be RED when enabled property is true', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled />);
    const icon = stopButton.find('Icon');
    const colorExpected = 'red';

    expect(icon.props().color).toBe(colorExpected);
  });

  it('should be BLACK when enabled property is false', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled={false} />);
    const icon = stopButton.find('Icon');
    const colorExpected = 'black';

    expect(icon.props().color).toBe(colorExpected);
  });


  it('should have styles', () => {
    const stopButton = shallow(<StopButton onStop={jest.fn()} enabled />);
    const icon = stopButton.find('Icon');
    const styleExpected = {marginRight: 10, marginLeft: 10};

    expect(icon.props().iconStyle).toEqual(styleExpected);
  });

  it('should execute onStop when click the icon', () => {
    const mockOnStop = jest.fn();
    const stopButton = shallow(<StopButton onStop={mockOnStop} enabled />);
    const icon = stopButton.find('Icon');

    icon.simulate('press');

    expect(mockOnStop.mock.calls.length).toBe(1);
  })
});
