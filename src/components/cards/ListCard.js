import React from "react";
import StyledListCard from "../styles/cards/StyledListCard";

const ListCard = ({ list, handleClick }) => {
  return (
    <StyledListCard className="list-card" onClick={handleClick}>
      <h3 className="list-card-title">{list.listName}</h3>
    </StyledListCard>
  );
};

export default ListCard;
