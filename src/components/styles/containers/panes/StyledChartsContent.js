import styled from "styled-components";

const StyledChartsContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 10px;
  overflow-y: auto;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (min-width: 1025px) {
    width: 40%;
  }
`;

export default StyledChartsContent;
