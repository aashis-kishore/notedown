import { VIEWS } from "../hooks/useAppState";

export const appInitState = {
  darkTheme: true,
  leftPaneHidden: false,
  currentView: VIEWS.HOME,
  lists: [],
  currentList: null,
};

export const createListInitState = {
  listName: "",
};

export const createListItemInitState = {
  itemName: "",
  description: "",
  dueDatetime: "",
};
