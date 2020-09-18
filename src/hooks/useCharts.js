import { useEffect, useReducer } from "react";

export const CHARTS_TABS = {
  ALL: "all",
  UPCOMING: "upcoming",
  DONE: "done",
  UNDONE: "undone",
};

export const CHARTS_ACTIONS = {
  INC_TICK: "increment tick",
};

const chartsReducer = (state, action) => {
  switch (action.type) {
    case CHARTS_TABS.ALL:
      return { ...state, currentTab: CHARTS_TABS.ALL };
    case CHARTS_TABS.UPCOMING:
      return { ...state, currentTab: CHARTS_TABS.UPCOMING };
    case CHARTS_TABS.DONE:
      return { ...state, currentTab: CHARTS_TABS.DONE };
    case CHARTS_TABS.UNDONE:
      return { ...state, currentTab: CHARTS_TABS.UNDONE };

    case CHARTS_ACTIONS.INC_TICK:
      return { ...state, tick: state.tick++ };
    default:
      return state;
  }
};

const useCharts = ({ initState }) => {
  const [state, dispatch] = useReducer(chartsReducer, initState);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch({ type: CHARTS_ACTIONS.INC_TICK }),
      1000
    );

    return () => clearInterval(interval);
  });

  return { state, dispatch };
};

export default useCharts;
