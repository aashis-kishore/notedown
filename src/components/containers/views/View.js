import React, { createContext, useContext } from "react";
import { VIEWS } from "../../../hooks/useAppState";
import { AppContext } from "../App";
import CreateListView from "./CreateListView";
import HomeView from "./HomeView";
import ViewListView from "./ViewListView";
import CreateListItemView from "./CreateListItemView";

const ViewContext = createContext(true);

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

  return <ViewContext.Provider value={appState}>{view}</ViewContext.Provider>;
};

export default View;
