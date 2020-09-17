import React from "react";
import { VIEWS } from "../../../hooks/useAppState";
import CommonButton, { COMMON_BUTTON_TYPES } from "../../buttons/CommonButton";
import StyledHomeView from "../../styles/containers/views/StyledHomeView";
import StyledView from "../../styles/containers/views/StyledView";

const HomeView = ({ appState }) => {
  return (
    <StyledView className="view">
      <StyledHomeView className="home-view">
        <CommonButton
          btnType={COMMON_BUTTON_TYPES.DEFAULT}
          text="Create List"
          onClick={() => appState.dispatch({ type: VIEWS.CREATE_LIST })}
        />
      </StyledHomeView>
    </StyledView>
  );
};

export default HomeView;
