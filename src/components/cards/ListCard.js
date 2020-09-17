import React from "react";
import StyledListCard from "../styles/cards/StyledListCard";

const ListCard = ({ appState, list, handleClick }) => {
  return (
    <StyledListCard
      className={`list-card${
        appState.state.currentList && appState.state.currentList.id === list.id
          ? " card-active"
          : ""
      }`}
      onClick={handleClick}
    >
      <h3 className="list-card-title">{list.listName}</h3>
    </StyledListCard>
  );
};

export default ListCard;
