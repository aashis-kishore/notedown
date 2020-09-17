import React from "react";
import StyledForm from "../styles/forms/StyledForm";
import CommonButton from "../buttons/CommonButton";
import useForm from "../../hooks/useForm";
import { createListInitState } from "../../lib/initStates";
import { validateCreateListForm } from "../../lib/utils";
import List from "../../lib/list";
import { APP_ACTIONS } from "../../hooks/useAppState";

const CreateListForm = ({ appState }) => {
  const [values, errors, handleChange, handleSubmit] = useForm({
    initState: createListInitState,
    validate: validateCreateListForm,
    onSubmit: ({ listName }) =>
      appState.dispatch({
        type: APP_ACTIONS.ADD_LIST,
        payload: { list: new List(listName) },
      }),
  });

  return (
    <StyledForm className="create-list-form" onSubmit={handleSubmit}>
      <div className="list-name-field">
        <label htmlFor="listName" className={errors.listName ? "error" : ""}>
          {errors.listName ? errors.listName : "List Name"}
        </label>
        <br />
        <input
          type="text"
          name="listName"
          id="listName"
          placeholder="Grocery"
          autoFocus
          values={values.listName}
          onChange={handleChange}
        />
      </div>
      <CommonButton text="Create List" type="submit" />
    </StyledForm>
  );
};

export default CreateListForm;
