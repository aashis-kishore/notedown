import React from "react";
import CreateListForm from "../../forms/CreateListForm";
import StyledCreateListView from "../../styles/containers/views/StyledCreateListView";
import StyledView from "../../styles/containers/views/StyledView";

const CreateListView = ({ appState }) => {
  return (
    <StyledView>
      <StyledCreateListView className="create-list-view">
        <CreateListForm appState={appState} />
      </StyledCreateListView>
    </StyledView>
  );
};

export default CreateListView;
