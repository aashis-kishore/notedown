import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return <i {...props}></i>;
};

const StyledControlButton = styled(Button)`
  cursor: pointer;
`;

export default StyledControlButton;
