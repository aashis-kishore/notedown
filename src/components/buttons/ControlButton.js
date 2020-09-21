import React from 'react';
import StyledControlButton from '../styles/buttons/StyledControlButton';

export const CONTROL_BUTTON_TYPES = {
  CHECK: `fas fa-check fa-lg`,
  TIMES: `fas fa-times fa-lg`,
  PEN: `fas fa-pen`,
};

const ControlButton = (props) => {
  return <StyledControlButton {...props} />;
};

export default ControlButton;
