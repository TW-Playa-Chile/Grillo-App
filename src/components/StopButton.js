import React from 'react';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

const style = {
  marginRight: 10,
  marginLeft: 10
}

const states = {
  enabled: {
    name: 'stop-circle-o',
    type: 'font-awesome',
    color: 'red',
    style
  },
  disabled: {
    name: 'circle',
    type: 'font-awesome',
    color: 'black',
    style
  }
};

const StopButton = (props) => {
  const stopButtonIcon = props.enableIcon
    ? states.enabled
    : states.disabled;
  const {name, type, color, style} = stopButtonIcon;
  const disabled = !props.enableIcon;

  return (<Icon
    disabled={disabled}
    name={name}
    type={type}
    color={color}
    iconStyle={style}/>);
};

StopButton.propTypes = {
  enableIcon: PropTypes.bool.isRequired
};

export default StopButton;
