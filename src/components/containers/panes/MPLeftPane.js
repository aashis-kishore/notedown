import React, { useContext } from "react";
import { APP_ACTIONS, VIEWS } from "../../../hooks/useAppState";
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
          handleClick={(event) => {
            if (event.ctrlKey) {
              return appState.dispatch({
                type: APP_ACTIONS.DELETE_LIST,
                payload: { id: list.id },
              });
            }
            return appState.dispatch({
              type: VIEWS.TOGGLE_VIEW_LIST,
              payload: { id: list.id },
            });
          }}
        />
      ))}
    </StyledMPLeftPane>
  );
};

export default MPLeftPane;
