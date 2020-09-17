import React from "react";
import StyledToggleButton from "../styles/buttons/StyledToggleButton";

export const TOGGLE_BUTTON_TYPES = {
  BARS: "fas fa-bars fa-2x",
  MOON: "fas fa-moon fa-2x",
  HOME: "fas fa-home fa-2x",
};

const ToggleButton = (props) => {
  return <StyledToggleButton {...props} />;
};

export default ToggleButton;
