import React from "react";
import StyledCharts from "../styles/containers/StyledCharts";
import ChartsContent from "./panes/ChartsContent";
import ChartsTabs from "./panes/ChartsTabs";

const Charts = () => {
  return (
    <StyledCharts className="charts">
      <ChartsTabs />
      <ChartsContent />
    </StyledCharts>
  );
};

export default Charts;
