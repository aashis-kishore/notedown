import React from "react";
import { VIEWS } from "../../../hooks/useAppState";
import CommonButton from "../../buttons/CommonButton";
import StyledView from "../../styles/containers/views/StyledView";
import StyledViewListView from "../../styles/containers/views/StyledViewListView";

const ViewListView = ({ appState }) => {
  return (
    <StyledView>
      <StyledViewListView>
        <CommonButton
          text="Create Item"
          onClick={() => appState.dispatch({ type: VIEWS.CREATE_LIST_ITEM })}
        />
      </StyledViewListView>
    </StyledView>
  );
};

export default ViewListView;
