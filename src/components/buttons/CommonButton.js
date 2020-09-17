import React from "react";
import StyledCommonButton from "../styles/buttons/StyledCommonButton";

export const COMMON_BUTTON_TYPES = {
  DEFAULT: "default",
};

const CommonButton = (props) => {
  const { btnType, ...newProps } = props;

  let button = null;

  // if (props.btnType === COMMON_BUTTON_TYPES.DEFAULT)
  button = <StyledCommonButton {...newProps} />;

  return button;
};

export default CommonButton;
