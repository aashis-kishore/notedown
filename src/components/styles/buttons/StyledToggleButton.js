import React from "react";

import styled from "styled-components";

const Button = (props) => {
  const { btnType, ...newProps } = props;

  return (
    <div className={newProps.className} {...newProps}>
      <i className={btnType}></i>
    </div>
  );
};

const StyledToggleButton = styled(Button)`
  cursor: pointer;
  display: inline-block;
  margin: 0 0.5rem;
  color: ${(props) => props.theme.toggleButton.primary};
  transition: all 0.3s ease;

  :hover {
    color: ${(props) => props.theme.toggleButton.secondary};
  }
`;

export default StyledToggleButton;
