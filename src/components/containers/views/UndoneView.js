import React from "react";
import { getNow, toLocale } from "../../../lib/utils";
import Card, { CARDS } from "../../cards/Card";

const UndoneView = ({ appState }) => {
  return (
    <div className="undone-view">
      {appState.state.items.map((item) => {
        if (
          !item.isDone &&
          new Date(toLocale(getNow(0))) >= new Date(item.dueDatetime)
        )
          return <Card cardType={CARDS.CHARTS} key={item.id} item={item} />;
        return null;
      })}
    </div>
  );
};

export default UndoneView;
