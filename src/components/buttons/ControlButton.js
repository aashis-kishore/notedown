import React from 'react';
import StyledControlButton from '../styles/buttons/StyledControlButton';

export const CONTROL_BUTTON_TYPES = {
  CHECK: `fas fa-check ${window.screen.width > 480 ? 'fa-lg' : ''}`,
  TIMES: `fas fa-times ${window.screen.width > 480 ? 'fa-lg' : ''}`,
};

const ControlButton = (props) => {
  return <StyledControlButton {...props} />;
};

export default ControlButton;
