import React, { createContext } from "react";
import useCharts from "../../hooks/useCharts";
import StyledCharts from "../styles/containers/StyledCharts";
import ChartsContent from "./panes/ChartsContent";
import ChartsTabs from "./panes/ChartsTabs";

export const ChartsContext = createContext(true);

const Charts = ({ initState }) => {
  const chartsState = useCharts({ initState });

  return (
    <ChartsContext.Provider value={chartsState}>
      <StyledCharts className="charts">
        <ChartsTabs />
        <ChartsContent />
      </StyledCharts>
    </ChartsContext.Provider>
  );
};

export default Charts;
