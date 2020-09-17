import React, { useContext } from "react";
import { VIEWS } from "../../../hooks/useAppState";
import Card, { CARDS } from "../../cards/Card";
import StyledMPLeftPane from "../../styles/containers/panes/StyledMPLeftPane";
import { AppContext } from "../App";

const MPLeftPane = ({ animationStyle }) => {
  const appState = useContext(AppContext);

  return (
    <StyledMPLeftPane className="left-pane" style={animationStyle}>
      {appState.state.lists.map((list) => (
        <Card
          appState={appState}
          key={list.id}
          list={list}
          cardType={CARDS.LIST}
          handleClick={() =>
            appState.dispatch({
              type: VIEWS.TOGGLE_VIEW_LIST,
              payload: { id: list.id },
            })
          }
        />
      ))}
    </StyledMPLeftPane>
  );
};

export default MPLeftPane;
