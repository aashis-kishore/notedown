import React from "react";
import CreateListItemForm from "../../forms/CreateListItemForm";
import StyledCreateListItemView from "../../styles/containers/views/StyledCreateListItemView";

const CreateListItemView = ({ appState }) => {
  return (
    <StyledCreateListItemView>
      <CreateListItemForm appState={appState} />
    </StyledCreateListItemView>
  );
};

export default CreateListItemView;
