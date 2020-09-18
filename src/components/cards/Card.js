import React from "react";
import StyledCard from "../styles/cards/StyledCard";
import ListCard from "../cards/ListCard";
import ListItemCard from "./ListItemCard";
import ChartsCard from "./ChartsCard";

export const CARDS = {
  LIST: "list",
  LIST_ITEM: "list item",
  CHARTS: "charts",
};

const Card = (props) => {
  const { cardType, ...newProps } = props;
  let card = null;

  if (cardType === CARDS.LIST) card = <ListCard {...newProps} />;
  else if (cardType === CARDS.LIST_ITEM) card = <ListItemCard {...newProps} />;
  else if (cardType === CARDS.CHARTS) card = <ChartsCard {...newProps} />;

  return <StyledCard className="card">{card}</StyledCard>;
};

export default Card;
