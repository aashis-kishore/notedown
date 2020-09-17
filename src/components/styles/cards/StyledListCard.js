import styled from "styled-components";
import StyledCard from "./StyledCard";

const StyledListCard = styled(StyledCard)`
  background: ${(props) => props.theme.listCard.secondary};
  color: ${(props) => props.theme.listCard.primary};
  border-bottom: 1px solid ${(props) => props.theme.listCard.tertiary};
  transition: all 0.3s ease;

  .list-card-title {
    font-size: 1.4rem;
    letter-spacing: 2px;
    padding: 1rem 0.5rem;
  }

  :hover,
  &.card-active {
    background: ${(props) => props.theme.listCard.tertiary};
    color: ${(props) => props.theme.listCard.secondary};
  }
`;

export default StyledListCard;
