import styled from "styled-components";
import StyledCard from "./StyledCard";

const StyledListCard = styled(StyledCard)`
  background: ${(props) => props.theme.listCard.secondary};
  color: ${(props) => props.theme.listCard.primary};
  border-bottom: 1px solid ${(props) => props.theme.listCard.tertiary};
  transition: all 0.3s ease;

  :hover,
  &.card-active {
    background: ${(props) => props.theme.listCard.tertiary};
    color: ${(props) => props.theme.listCard.secondary};
  }

  .list-card-title {
    letter-spacing: 2px;
  }

  @media screen and (max-width: 480px) {
    .list-card-title {
      font-size: 0.8rem;
      letter-spacing: 2px;
      padding: 0.5rem 0.3rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .list-card-title {
      font-size: 1rem;
      padding: 0.6rem 0.4rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .list-card-title {
      font-size: 1.2rem;
      padding: 0.8rem 0.6rem;
    }
  }

  @media screen and (min-width: 1025px) {
    .list-card-title {
      font-size: 1.4rem;
      padding: 1rem 0.8rem;
    }
  }
`;

export default StyledListCard;
