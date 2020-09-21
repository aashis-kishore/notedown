import styled from 'styled-components';
import StyledCard from './StyledCard';

const StyledChartsCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.chartsCard.primary};
  color: ${(props) => props.theme.chartsCard.secondary};
  border-bottom: 1px solid ${(props) => props.theme.chartsCard.tertiary};
  transition: all 0.3s ease;

  :hover {
    background: ${(props) => props.theme.chartsCard.secondary};
    color: ${(props) => props.theme.chartsCard.primary};
  }

  &.is-done {
    background: ${(props) => props.theme.chartsCard.quaternary};
  }

  &.is-done:hover {
    background: ${(props) => props.theme.chartsCard.secondary};
  }

  .charts-card-title {
    letter-spacing: 2px;
  }

  .charts-card-body {
    display: flex;
    justify-content: space-between;
  }

  .charts-card-description {
    letter-spacing: 2px;
    color: ${(props) => props.theme.chartsCard.tertiary};
  }

  .charts-card-duedatetime {
    letter-spacing: 2px;
    color: ${(props) => props.theme.chartsCard.tertiary};
  }

  @media screen and (max-width: 480px) {
    padding: 0.6rem;

    .charts-card-title {
      font-size: 1rem;
      padding-bottom: 0.6rem;
    }

    .charts-card-description {
      font-size: 0.8rem;
      padding-bottom: 0.4rem;
    }

    .charts-card-duedatetime {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0.8rem;

    .charts-card-title {
      font-size: 1.2rem;
      padding-bottom: 0.8rem;
    }

    .charts-card-description {
      font-size: 0.8rem;
      padding-bottom: 0.4rem;
    }

    .charts-card-duedatetime {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0.8rem;

    .charts-card-title {
      font-size: 1.4rem;
      padding-bottom: 1rem;
    }

    .charts-card-description {
      font-size: 1rem;
      padding-bottom: 0.6rem;
    }

    .charts-card-duedatetime {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1025px) {
    padding: 1rem;

    .charts-card-title {
      font-size: 1.6rem;
      padding-bottom: 1rem;
    }

    .charts-card-description {
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }

    .charts-card-duedatetime {
      font-size: 1.2rem;
    }
  }
`;

export default StyledChartsCard;
