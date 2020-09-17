import styled from "styled-components";
import StyledCard from "./StyledCard";

const StyledListItemCard = styled(StyledCard)`
  border-bottom: 1px solid ${(props) => props.theme.listItemCard.tertiary};
  padding: 1rem;
  background: ${(props) => props.theme.listItemCard.primary};
  color: ${(props) => props.theme.listItemCard.secondary};
  transition: all 0.3s ease;

  :hover {
    background: ${(props) => props.theme.listItemCard.tertiary};
    color: ${(props) => props.theme.listItemCard.primary};
  }

  .list-item-card-title {
    font-size: 1.4rem;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .list-item-card-description {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
`;

export default StyledListItemCard;
