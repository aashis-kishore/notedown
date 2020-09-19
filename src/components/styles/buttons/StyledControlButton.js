import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return <i {...props}></i>;
};

const StyledControlButton = styled(Button)`
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.primary};
  }
`;

export default StyledControlButton;
