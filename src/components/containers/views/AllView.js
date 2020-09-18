import React from "react";
import Card, { CARDS } from "../../cards/Card";

const AllView = ({ appState }) => {
  return (
    <div className="all-view">
      {appState.state.items.map((item) => (
        <Card
          cardType={CARDS.CHARTS}
          key={item.id}
          item={item}
          hasDone={!item.isDone}
        />
      ))}
    </div>
  );
};

export default AllView;
