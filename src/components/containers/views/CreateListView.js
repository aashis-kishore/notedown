import React from "react";
import CreateListForm from "../../forms/CreateListForm";
import StyledCreateListView from "../../styles/containers/views/StyledCreateListView";

const CreateListView = ({ appState }) => {
  return (
    <StyledCreateListView className="create-list-view">
      <CreateListForm appState={appState} />
    </StyledCreateListView>
  );
};

export default CreateListView;
