import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StopButton from './../StopButton';

Enzyme.configure({ adapter: new Adapter() });

describe('Render a StopButton', () => {
  let iconStyle;

  beforeEach(() => {
    iconStyle = {
      enabled: {
        name: 'enabledName',
        type: 'enabledType',
        color: 'enabledColor',
        style: { width: 0 }
      },
      disabled: {
        name: 'disabledName',
        type: 'disabledType',
        color: 'disabledColor',
        style: { width: 1 }
      }
    };
  });

  it('Should render a Icon', () => {
    const stopButton = shallow(<StopButton enableIcon iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');

    expect(icon.length).toBe(1);
  });

  it('Should render disabled Icon when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');

    expect(icon.props().disabled).toBe(true);
  });

  it('Should render enabled Icon when enableIcon property is true', () => {
    const stopButton = shallow(<StopButton enableIcon iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');

    expect(icon.props().disabled).toBe(false);
  });

  it('Icon name should be "enabledName" and Icon type should by "enabledType" when enableIcon property is true', () => {
    const stopButton = shallow(<StopButton enableIcon iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');
    const iconNameExpected = 'enabledName';
    const iconTypeExpected = 'enabledType';

    expect(icon.props().name).toBe(iconNameExpected);
    expect(icon.props().type).toBe(iconTypeExpected);
  });

  it('Icon name should be "disabledName" and Icon type should by "disabledType" when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');
    const iconNameExpected = 'disabledName';
    const iconTypeExpected = 'disabledType';

    expect(icon.props().name).toBe(iconNameExpected);
    expect(icon.props().type).toBe(iconTypeExpected);
  });

  it('Icon color should be "enabledColor" when enableIcon property is true', () => {
    const stopButton = shallow(<StopButton enableIcon iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');
    const iconColorExpected = 'enabledColor';

    expect(icon.props().color).toBe(iconColorExpected);
  });

  it('Icon color should be "disabledColor" when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');
    const iconColorExpected = 'disabledColor';

    expect(icon.props().color).toBe(iconColorExpected);
  });


  it('Icon style should be "enabledStyle" when enableIcon property is true', () => {
    const stopButton = shallow(<StopButton enableIcon iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');
    const iconStyleExpected = { width: 0 };

    expect(icon.props().iconStyle).toEqual(iconStyleExpected);
  });

  it('Icon style should be "disabledStyler" when enableIcon property is false', () => {
    const stopButton = shallow(<StopButton enableIcon={false} iconStyle={iconStyle} />);
    const icon = stopButton.find('Icon');
    const iconColorExpected = { width: 1 };

    expect(icon.props().iconStyle).toEqual(iconColorExpected);
  });
});
