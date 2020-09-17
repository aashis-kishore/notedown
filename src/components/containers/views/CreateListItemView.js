import React from "react";
import CreateListItemForm from "../../forms/CreateListItemForm";
import StyledCreateListItemView from "../../styles/containers/views/StyledCreateListItemView";
import StyledView from "../../styles/containers/views/StyledView";

const CreateListItemView = ({ appState }) => {
  return (
    <StyledView>
      <StyledCreateListItemView>
        <CreateListItemForm appState={appState} />
      </StyledCreateListItemView>
    </StyledView>
  );
};

export default CreateListItemView;
