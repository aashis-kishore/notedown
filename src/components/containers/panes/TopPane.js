import React, { useContext } from "react";
import { APP_ACTIONS } from "../../../hooks/useAppState";
import ToggleButton, { TOGGLE_BUTTON_TYPES } from "../../buttons/ToggleButton";
import StyledTopPane from "../../styles/containers/panes/StyledTopPane";
import { AppContext } from "../App";

const TopPane = () => {
  const appState = useContext(AppContext);

  return (
    <StyledTopPane className="top-pane">
      <ToggleButton
        className={`toggle-left-pane${
          appState.state.leftPaneHidden ? " left-pane-hidden" : ""
        }`}
        btnType={TOGGLE_BUTTON_TYPES.BARS}
        onClick={() =>
          appState.dispatch({ type: APP_ACTIONS.TOGGLE_LEFT_PANE })
        }
      />
      <ToggleButton
        className={`toggle-theme${appState.state.darkTheme ? " darkTheme" : ""}`}
        btnType={TOGGLE_BUTTON_TYPES.MOON}
        onClick={() => appState.dispatch({ type: APP_ACTIONS.TOGGLE_THEME })}
      />
    </StyledTopPane>
  );
};

export default TopPane;
