import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StopButton from './../StopButton';

Enzyme.configure({ adapter: new Adapter() });

describe('StopButton', () => {
  it('should render component', () => {
    const stopButton = shallow(<StopButton enableIcon />);

    expect(stopButton).toBeDefined();
  });

  it('should be disabled when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} />);
    const icon = stopButton.find('Icon');

    expect(icon.props().disabled).toBe(true);
  });

  it('should be enabled when enableIcon property is true', () => {
    const stopButton = shallow(<StopButton enableIcon />);
    const icon = stopButton.find('Icon');

    expect(icon.props().disabled).toBe(false);
  });

  it('should have enabled icon when enabeIcon is true', () => {
    const stopButton = shallow(<StopButton enableIcon />);
    const icon = stopButton.find('Icon');
    const iconNameExpected = 'stop-circle-o';
    const iconTypeExpected = 'font-awesome';

    expect(icon.props().name).toBe(iconNameExpected);
    expect(icon.props().type).toBe(iconTypeExpected);
  });

  it('should have disabled icon when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} />);
    const icon = stopButton.find('Icon');
    const iconNameExpected = 'circle';
    const iconTypeExpected = 'font-awesome';

    expect(icon.props().name).toBe(iconNameExpected);
    expect(icon.props().type).toBe(iconTypeExpected);
  });

  it('should be RED when enableIcon property is true', () => {
    const stopButton = shallow(<StopButton enableIcon />);
    const icon = stopButton.find('Icon');
    const colorExpected = 'red';

    expect(icon.props().color).toBe(colorExpected);
  });

  it('should be BLACK when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} />);
    const icon = stopButton.find('Icon');
    const colorExpected = 'black';

    expect(icon.props().color).toBe(colorExpected);
  });


  it('should have styles', () => {
    const stopButton = shallow(<StopButton enableIcon />);
    const icon = stopButton.find('Icon');
    const styleExpected = {marginRight: 10, marginLeft: 10};

    expect(icon.props().iconStyle).toEqual(styleExpected);
  });
});
