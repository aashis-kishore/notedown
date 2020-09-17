import React from "react";
import StyledCard from "../styles/cards/StyledCard";
import ListCard from "../cards/ListCard";

export const CARDS = {
  LIST: "list",
  LIST_ITEM: "",
};

const Card = (props) => {
  const { cardType, appState, ...newProps } = props;
  let card = null;

  if (cardType === CARDS.LIST) card = <ListCard {...newProps} />;
  else if (cardType === CARDS.LIST_ITEM) card = "";

  return (
    <StyledCard
      className={`card${
        appState.state.currentList &&
        appState.state.currentList.id === props.list.id
          ? " card-active"
          : ""
      }`}
    >
      {card}
    </StyledCard>
  );
};

export default Card;
