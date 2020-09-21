import styled from 'styled-components';
import StyledCard from './StyledCard';

const StyledListCard = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.listCard.secondary};
  color: ${(props) => props.theme.listCard.primary};
  border-bottom: 1px solid ${(props) => props.theme.listCard.tertiary};
  padding: 1rem;
  transition: all 0.3s ease;

  :hover,
  &.card-active {
    background: ${(props) => props.theme.listCard.tertiary};
    color: ${(props) => props.theme.listCard.secondary};
  }

  .content {
    width: 85%;
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
  }

  .list-card-title {
    letter-spacing: 2px;
  }

  @media screen and (max-width: 480px) {
    padding: 2.5vw;

    .list-card-title {
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .list-card-title {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .list-card-title {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1025px) {
    .list-card-title {
      font-size: 1.4rem;
    }
  }
`;

export default StyledListCard;
