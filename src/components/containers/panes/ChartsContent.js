import React, { useContext } from "react";
import Card, { CARDS } from "../../cards/Card";
import StyledChartsContent from "../../styles/containers/panes/StyledChartsContent";
import { AppContext } from "../App";

const ChartsContent = () => {
  const appState = useContext(AppContext);

  return (
    <StyledChartsContent className="charts-content">
      {appState.state.lists.map((list) => (
        <Card
          key={list.id}
          list={list}
          cardType={CARDS.LIST}
          appState={appState}
        />
      ))}
    </StyledChartsContent>
  );
};

export default ChartsContent;
