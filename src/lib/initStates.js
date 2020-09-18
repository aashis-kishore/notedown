import { VIEWS } from "../hooks/useAppState";
import { CHARTS_TABS } from "../hooks/useCharts";
import { getNow, toLocale } from "./utils";

export const appInitState = {
  darkTheme: true,
  leftPaneHidden: true,
  currentView: VIEWS.HOME,
  lists: [],
  items: [],
  currentList: null,
};

export const createListInitState = {
  listName: "",
};

export const createListItemInitState = {
  itemName: "",
  description: "",
  dueDatetime: toLocale(getNow()),
};

export const chartsInitState = {
  tick: 0,
  currentTab: CHARTS_TABS.ALL,
};
