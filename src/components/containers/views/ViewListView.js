import React from "react";
import { APP_ACTIONS, VIEWS } from "../../../hooks/useAppState";
import CommonButton from "../../buttons/CommonButton";
import Card, { CARDS } from "../../cards/Card";
import StyledViewListView from "../../styles/containers/views/StyledViewListView";

const ViewListView = ({ appState }) => {
  return (
    <StyledViewListView className="view-list-view">
      <div className="list-item-card-wrapper">
        {appState.state.items.map((item) => {
          if (item.listID === appState.state.currentList.id)
            return (
              <Card
                appState={appState}
                key={item.id}
                item={item}
                cardType={CARDS.LIST_ITEM}
                handleClick={(event) => {
                  if (event.ctrlKey) {
                    return appState.dispatch({
                      type: APP_ACTIONS.DELETE_LIST_ITEM,
                      payload: { id: item.id },
                    });
                  }
                }}
              />
            );
          return null;
        })}
      </div>
      <div className="wrapper">
        <CommonButton
          text="Create Item"
          onClick={() => appState.dispatch({ type: VIEWS.CREATE_LIST_ITEM })}
        />
      </div>
    </StyledViewListView>
  );
};

export default ViewListView;
