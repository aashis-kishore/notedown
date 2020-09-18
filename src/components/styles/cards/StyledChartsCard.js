import styled from "styled-components";
import StyledCard from "./StyledCard";

const StyledChartsCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.chartsCard.primary};
  color: ${(props) => props.theme.chartsCard.secondary};
  border-bottom: 1px solid ${(props) => props.theme.chartsCard.tertiary};
  padding: 1rem;
  transition: all 0.3s ease;

  :hover {
    background: ${(props) => props.theme.chartsCard.secondary};
    color: ${(props) => props.theme.chartsCard.primary};
  }

  .charts-card-title {
    font-size: 1.6rem;
    letter-spacing: 2px;
    padding-bottom: 1rem;
  }

  .charts-card-body {
    display: flex;
    justify-content: space-between;
  }

  .charts-card-description {
    font-size: 1rem;
    letter-spacing: 2px;
    padding-bottom: 0.5rem;
    color: ${(props) => props.theme.chartsCard.tertiary};
  }

  .charts-card-duedatetime {
    letter-spacing: 2px;
    color: ${(props) => props.theme.chartsCard.tertiary};
  }

  .fa-check:hover {
    color: ${(props) => props.theme.primary};
  }

  &.is-done {
    background: ${(props) => props.theme.chartsCard.quaternary};
  }

  &.is-done:hover {
    background: ${(props) => props.theme.chartsCard.secondary};
  }
`;

export default StyledChartsCard;
