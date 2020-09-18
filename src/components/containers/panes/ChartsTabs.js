import React, { useContext } from "react";
import { CHARTS_TABS } from "../../../hooks/useCharts";
import CommonButton from "../../buttons/CommonButton";
import StyledChartsTabs from "../../styles/containers/panes/StyledChartsTabs";
import { ChartsContext } from "../Charts";

const ChartsTabs = () => {
  const chartsState = useContext(ChartsContext);

  return (
    <StyledChartsTabs className="charts-tabs">
      <CommonButton
        text="All"
        className={`${
          chartsState.state.currentTab === CHARTS_TABS.ALL ? "tab-active" : ""
        }`}
        onClick={() => chartsState.dispatch({ type: CHARTS_TABS.ALL })}
      />
      <CommonButton
        text="Upcoming"
        className={`${
          chartsState.state.currentTab === CHARTS_TABS.UPCOMING
            ? "tab-active"
            : ""
        }`}
        onClick={() => chartsState.dispatch({ type: CHARTS_TABS.UPCOMING })}
      />
      <CommonButton
        text="Done"
        className={`${
          chartsState.state.currentTab === CHARTS_TABS.DONE ? "tab-active" : ""
        }`}
        onClick={() => chartsState.dispatch({ type: CHARTS_TABS.DONE })}
      />
      <CommonButton
        text="Undone"
        className={`${
          chartsState.state.currentTab === CHARTS_TABS.UNDONE
            ? "tab-active"
            : ""
        }`}
        onClick={() => chartsState.dispatch({ type: CHARTS_TABS.UNDONE })}
      />
    </StyledChartsTabs>
  );
};

export default ChartsTabs;
