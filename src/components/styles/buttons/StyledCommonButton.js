import React from 'react';
import styled from 'styled-components';

const Button = (props) => (
  <button {...props} className={props.className}>
    {props.text ? props.text : 'Button'}
  </button>
);

const StyledCommonButton = styled(Button)`
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: ${(props) => props.theme.commonButton.primary};
  color: ${(props) => props.theme.commonButton.secondary};
  border: 1px solid ${(props) => props.theme.commonButton.secondary};
  font-weight: 600;
  transition: all 0.3s ease;

  :hover {
    background: ${(props) => props.theme.commonButton.secondary};
    color: ${(props) => props.theme.commonButton.primary};
    border-radius: 2px;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 2.5vw;
    font-size: 5vw;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0.5rem 0.8rem;
  }

  @media screen and (min-width: 769px) {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
  }
`;

export default StyledCommonButton;
