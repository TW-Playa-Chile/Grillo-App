import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const StopButton = (props) => {
  const stopButtonIcon = props.enableIcon ? props.iconStyle.enabled : props.iconStyle.disabled;
  const { name, type, color, style } = stopButtonIcon;
  const disabled = !props.enableIcon;

  return (<Icon disabled={disabled} name={name} type={type} color={color} iconStyle={style} />);
};

StopButton.propTypes = {
  enableIcon: PropTypes.bool.isRequired,
  iconStyle: PropTypes.object.isRequired
};

export default StopButton;
