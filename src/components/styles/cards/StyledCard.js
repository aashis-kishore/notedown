import styled from "styled-components";

const StyledCard = styled.div`
  cursor: pointer;
  user-select: none;
  background: ${(props) => props.theme.card.secondary};
  color: ${(props) => props.theme.card.primary};
  transition: all 0.3s ease;

  :hover,
  &.card-active {
    background: ${(props) => props.theme.card.tertiary};
    color: ${(props) => props.theme.card.secondary};
  }
`;

export default StyledCard;
