import React from "react";
import Card, { CARDS } from "../../cards/Card";

const DoneView = ({ appState }) => {
  return (
    <div className="done-view">
      {appState.state.items.map((item) => {
        if (item.isDone)
          return <Card cardType={CARDS.CHARTS} key={item.id} item={item} />;
        return null;
      })}
    </div>
  );
};

export default DoneView;
