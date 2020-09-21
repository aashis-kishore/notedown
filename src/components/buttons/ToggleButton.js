import React from 'react';
import StyledToggleButton from '../styles/buttons/StyledToggleButton';

export const TOGGLE_BUTTON_TYPES = {
  BARS: `fas fa-bars fa-lg`,
  MOON: `fas fa-moon fa-lg`,
  HOME: `fas fa-home fa-lg`,
};

const ToggleButton = (props) => {
  return <StyledToggleButton {...props} />;
};

export default ToggleButton;
