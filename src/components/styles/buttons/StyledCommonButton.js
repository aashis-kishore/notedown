import React from "react";
import styled from "styled-components";

const Button = (props) => (
  <button {...props} className={props.className}>
    {props.text ? props.text : "Button"}
  </button>
);

const StyledCommonButton = styled(Button)`
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: ${(props) => props.theme.commonButton.primary};
  color: ${(props) => props.theme.commonButton.secondary};
  border: 1px solid ${(props) => props.theme.commonButton.secondary};
  transition: all 0.3s ease;

  :hover {
    background: ${(props) => props.theme.commonButton.secondary};
    color: ${(props) => props.theme.commonButton.primary};
    border-radius: 2px;
  }
`;

export default StyledCommonButton;
