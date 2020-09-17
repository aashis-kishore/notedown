import React from "react";
import StyledCard from "../styles/cards/StyledCard";
import ListCard from "../cards/ListCard";
import ListItemCard from "./ListItemCard";

export const CARDS = {
  LIST: "list",
  LIST_ITEM: "list item",
};

const Card = (props) => {
  const { cardType, ...newProps } = props;
  let card = null;

  if (cardType === CARDS.LIST) card = <ListCard {...newProps} />;
  else if (cardType === CARDS.LIST_ITEM) card = <ListItemCard {...newProps} />;

  return <StyledCard className="card">{card}</StyledCard>;
};

export default Card;
