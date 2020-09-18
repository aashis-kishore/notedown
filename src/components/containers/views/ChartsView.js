import React, { useContext } from "react";
import { CHARTS_TABS } from "../../../hooks/useCharts";
import StyledChartsView from "../../styles/containers/views/StyledChartsView";
import { ChartsContext } from "../Charts";
import AllView from "./AllView";
import DoneView from "./DoneView";
import UndoneView from "./UndoneView";
import UpcomingView from "./UpcomingView";
import { AppContext } from "../App";

const ChartsView = () => {
  const appState = useContext(AppContext);
  const chartsState = useContext(ChartsContext);

  let view = null;
  if (chartsState.state.currentTab === CHARTS_TABS.ALL)
    view = <AllView appState={appState} />;
  else if (chartsState.state.currentTab === CHARTS_TABS.UPCOMING)
    view = <UpcomingView appState={appState} />;
  else if (chartsState.state.currentTab === CHARTS_TABS.DONE)
    view = <DoneView appState={appState} />;
  else if (chartsState.state.currentTab === CHARTS_TABS.UNDONE)
    view = <UndoneView appState={appState} />;

  return <StyledChartsView>{view}</StyledChartsView>;
};

export default ChartsView;
