import React from "react";
import StyledListItemCard from "../styles/cards/StyledListItemCard";

const ListItemCard = ({ item, handleClick }) => {
  return (
    <StyledListItemCard className="list-item-card" onClick={handleClick}>
      <h3 className="list-item-card-title">{item.itemName}</h3>
      {item.description && (
        <p className="list-item-card-description">{item.description}</p>
      )}
    </StyledListItemCard>
  );
};

export default ListItemCard;
