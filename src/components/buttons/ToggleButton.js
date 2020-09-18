import React from "react";
import StyledToggleButton from "../styles/buttons/StyledToggleButton";

export const TOGGLE_BUTTON_TYPES = {
  BARS: `fas fa-bars ${window.screen.width > 375 ? "fa-lg" : ""}`,
  MOON: `fas fa-moon ${window.screen.width > 375 ? "fa-lg" : ""}`,
  HOME: `fas fa-home ${window.screen.width > 375 ? "fa-lg" : ""}`,
};

const ToggleButton = (props) => {
  return <StyledToggleButton {...props} />;
};

export default ToggleButton;
