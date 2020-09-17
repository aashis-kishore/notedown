import React, { createContext, useContext } from "react";
import { useSpring } from "react-spring";
import StyledMiddlePane from "../../styles/containers/panes/StyledMiddlePane";
import MPLeftPane from "./MPLeftPane";
import MPRightPane from "./MPRightPane";
import { mplpAnimationStyle } from "../../../lib/animationStyles";
import { AppContext } from "../App";

export const MiddlePaneContext = createContext(true);

const MiddlePane = () => {
  const appState = useContext(AppContext);

  const mplpastyle = useSpring(
    mplpAnimationStyle(appState.state.leftPaneHidden)
  );
  return (
    <StyledMiddlePane className="middle-pane">
      <MPLeftPane animationStyle={mplpastyle} />
      <MPRightPane />
    </StyledMiddlePane>
  );
};

export default MiddlePane;
