import { animated } from "react-spring";
import styled from "styled-components";

const StyledMPLeftPane = styled(animated.div)`
  overflow-y: auto;

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 80vw;
    height: 100%;
    background: ${(props) => props.theme.primary};
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 40vw;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 30vw;
  }

  @media screen and (min-width: 1025px) {
    width: 20vw;
  }
`;

export default StyledMPLeftPane;
