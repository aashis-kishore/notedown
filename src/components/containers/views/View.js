import React, { useContext } from "react";
import { VIEWS } from "../../../hooks/useAppState";
import { AppContext } from "../App";
import CreateListView from "./CreateListView";
import HomeView from "./HomeView";
import ViewListView from "./ViewListView";
import CreateListItemView from "./CreateListItemView";
import StyledView from "../../styles/containers/views/StyledView";

const View = () => {
  const appState = useContext(AppContext);

  let view = null;

  if (appState.state.currentView === VIEWS.HOME)
    view = <HomeView appState={appState} />;
  else if (appState.state.currentView === VIEWS.CREATE_LIST)
    view = <CreateListView appState={appState} />;
  else if (appState.state.currentView === VIEWS.TOGGLE_VIEW_LIST)
    view = <ViewListView appState={appState} />;
  else if (appState.state.currentView === VIEWS.CREATE_LIST_ITEM)
    view = <CreateListItemView appState={appState} />;
  else view = <p>Unknown View</p>;

  return <StyledView className="view">{view}</StyledView>;
};

export default View;
