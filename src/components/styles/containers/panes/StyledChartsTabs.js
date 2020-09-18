import styled from "styled-components";

const StyledChartsTabs = styled.div`
  .tab-active {
    background: ${(props) => props.theme.commonButton.secondary};
    color: ${(props) => props.theme.commonButton.primary};
  }
`;

export default StyledChartsTabs;
