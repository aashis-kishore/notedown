const { useReducer } = require("react");

export const APP_ACTIONS = {
  TOGGLE_THEME: "toggle theme",
  TOGGLE_LEFT_PANE: "toggle left pane",
  ADD_LIST: "add new list",
  ADD_LIST_ITEM: "add new list item",
};

export const VIEWS = {
  HOME: "home view",
  CREATE_LIST: "create list view",
  TOGGLE_VIEW_LIST: "view list view",
  CREATE_LIST_ITEM: "create list item view",
};

const appReducer = (state, action) => {
  let list, newCurrentView;
  switch (action.type) {
    case APP_ACTIONS.TOGGLE_THEME:
      return { ...state, darkTheme: !state.darkTheme };
    case APP_ACTIONS.TOGGLE_LEFT_PANE:
      return { ...state, leftPaneHidden: !state.leftPaneHidden };
    case APP_ACTIONS.ADD_LIST:
      return {
        ...state,
        lists: [action.payload.list, ...state.lists],
        currentView: VIEWS.HOME,
      };

    case VIEWS.HOME:
      return { ...state, currentView: VIEWS.HOME, currentList: null };
    case VIEWS.CREATE_LIST:
      return { ...state, currentView: VIEWS.CREATE_LIST };
    case VIEWS.TOGGLE_VIEW_LIST:
      if (state.currentList && state.currentList.id === action.payload.id) {
        newCurrentView = VIEWS.HOME;
        list = null;
      } else {
        newCurrentView = VIEWS.TOGGLE_VIEW_LIST;
        list = state.lists.find((list) => list.id === action.payload.id);
      }
      return { ...state, currentView: newCurrentView, currentList: list };
    case VIEWS.CREATE_LIST_ITEM:
      return { ...state, currentView: VIEWS.CREATE_LIST_ITEM };
    default:
      return state;
  }
};

const useAppState = ({ initState }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  return { state, dispatch };
};

export default useAppState;
