import React from "react";
import StyledChartsContent from "../../styles/containers/panes/StyledChartsContent";
import ChartsView from "../views/ChartsView";

const ChartsContent = () => {
  return (
    <StyledChartsContent className="charts-content">
      <ChartsView />
    </StyledChartsContent>
  );
};

export default ChartsContent;
