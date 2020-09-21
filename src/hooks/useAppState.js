const { useReducer } = require('react');

export const APP_ACTIONS = {
  TOGGLE_THEME: 'toggle theme',
  TOGGLE_LEFT_PANE: 'toggle left pane',
  ADD_LIST: 'add list',
  ADD_LIST_ITEM: 'add list item',
  DELETE_LIST: 'delete list',
  DELETE_LIST_ITEM: 'delete list item',
  MARK_AS_DONE: 'mark item as done',
  UPDATE_LIST_ITEM: 'update list item',
};

export const VIEWS = {
  HOME: 'home view',
  CREATE_LIST: 'create list view',
  TOGGLE_VIEW_LIST: 'view list view',
  CREATE_LIST_ITEM: 'create list item view',
};

const appReducer = (state, action) => {
  let lists,
    list,
    listIndex,
    newCurrentView,
    item,
    items,
    leftPaneHidden,
    currentItem;
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
    case APP_ACTIONS.ADD_LIST_ITEM:
      list = state.currentList;

      if (!state.currentList.hasItems) {
        list = state.lists.find((list, index) => {
          listIndex = index;
          return list.id === action.payload.item.listID;
        });

        list.hasItems = true;
        state.lists[listIndex].hasItems = true;
      }

      return {
        ...state,
        lists: [...state.lists],
        items: [action.payload.item, ...state.items],
        currentView: VIEWS.TOGGLE_VIEW_LIST,
        currentList: list,
      };
    case APP_ACTIONS.DELETE_LIST:
      lists = state.lists.filter((list, index) => {
        if (list.id !== action.payload.id) return true;

        listIndex = index;
        return false;
      });

      items = state.items.filter((item) => item.listID !== action.payload.id);

      if (state.currentList && state.currentList.id === action.payload.id)
        list = lists.length ? lists[listIndex % lists.length] : null;
      else list = state.currentList;

      newCurrentView = lists.length ? state.currentView : VIEWS.HOME;

      return {
        ...state,
        lists: lists,
        items: items,
        currentList: list,
        currentView: newCurrentView,
      };
    case APP_ACTIONS.DELETE_LIST_ITEM:
      items = state.items.filter((item) => item.id !== action.payload.id);

      list = state.currentList;
      if (!items.find((item) => item.listID === state.currentList.id)) {
        list = state.lists.find((list, index) => {
          listIndex = index;
          return list.id === state.currentList.id;
        });

        list.hasItems = false;
        state.lists[listIndex].hasItems = false;
      }

      return { ...state, lists: state.lists, items: items, currentList: list };
    case APP_ACTIONS.MARK_AS_DONE:
      item = state.items.find((item) => item.id === action.payload.id);
      item.isDone = true;

      return { ...state, items: state.items };
    case APP_ACTIONS.UPDATE_LIST_ITEM:
      item = state.items.find((item) => item.id === action.payload.item.id);
      item.itemName = action.payload.item.itemName;
      item.description = action.payload.item.description;
      item.dueDatetime = action.payload.item.dueDatetime;
      item.isDone = false;

      return { ...state, currentView: VIEWS.TOGGLE_VIEW_LIST };

    case VIEWS.HOME:
      return {
        ...state,
        currentView: VIEWS.HOME,
        currentList: null,
        currentItem: null,
      };
    case VIEWS.CREATE_LIST:
      return { ...state, currentView: VIEWS.CREATE_LIST, currentItem: null };
    case VIEWS.TOGGLE_VIEW_LIST:
      if (state.currentList && state.currentList.id === action.payload.id) {
        newCurrentView = VIEWS.HOME;
        list = null;
      } else {
        newCurrentView = VIEWS.TOGGLE_VIEW_LIST;
        list = state.lists.find((list) => list.id === action.payload.id);
      }
      leftPaneHidden = window.screen.width <= 480 ? true : state.leftPaneHidden;

      return {
        ...state,
        currentView: newCurrentView,
        currentList: list,
        leftPaneHidden: leftPaneHidden,
        currentItem: null,
      };
    case VIEWS.CREATE_LIST_ITEM:
      currentItem =
        action.payload && action.payload.item ? action.payload.item : null;

      return {
        ...state,
        currentView: VIEWS.CREATE_LIST_ITEM,
        currentItem: currentItem,
      };
    default:
      return state;
  }
};

const useAppState = ({ initState }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  return { state, dispatch };
};

export default useAppState;
