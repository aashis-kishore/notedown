import styled from 'styled-components';
import StyledCard from './StyledCard';

const StyledListItemCard = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.listItemCard.tertiary};
  background: ${(props) => props.theme.listItemCard.primary};
  color: ${(props) => props.theme.listItemCard.secondary};
  transition: all 0.3s ease;

  :hover {
    background: ${(props) => props.theme.listItemCard.tertiary};
    color: ${(props) => props.theme.listItemCard.primary};
  }

  .content {
    width: 90%;
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  }

  .list-item-card-title {
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .list-item-card-description {
    letter-spacing: 2px;
  }

  @media screen and (max-width: 480px) {
    padding: 0.6rem;

    .list-item-card-title {
      font-size: 1rem;
    }

    .list-item-card-description {
      font-size: 0.6rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0.6rem;

    .list-item-card-title {
      font-size: 1.2rem;
    }

    .list-item-card-description {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0.8rem;

    .list-item-card-title {
      font-size: 1.4rem;
    }

    .list-item-card-description {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1025px) {
    padding: 1rem;

    .list-item-card-title {
      font-size: 1.6rem;
    }

    .list-item-card-description {
      font-size: 1.2rem;
    }
  }
`;

export default StyledListItemCard;
