import React from 'react';
import { APP_ACTIONS } from '../../hooks/useAppState';
import useForm from '../../hooks/useForm';
import { createListItemInitState } from '../../lib/initStates';
import ListItem from '../../lib/listItem';
import {
  getNow,
  hasExpired,
  toLocale,
  validateCreateListItemForm,
} from '../../lib/utils';
import CommonButton from '../buttons/CommonButton';
import StyledForm from '../styles/forms/StyledForm';

const CreateListItemForm = ({ appState }) => {
  const initState = appState.state.currentItem
    ? appState.state.currentItem
    : createListItemInitState;

  const [values, errors, handleChange, handleSubmit] = useForm({
    initState: initState,
    validate: validateCreateListItemForm,
    onSubmit: ({ id, itemName, description, dueDatetime }) => {
      if (appState.state.currentItem) {
        const newDueDatetime = !hasExpired(dueDatetime)
          ? dueDatetime
          : toLocale(getNow());

        return appState.dispatch({
          type: APP_ACTIONS.UPDATE_LIST_ITEM,
          payload: {
            item: {
              id,
              itemName,
              description,
              dueDatetime: newDueDatetime,
            },
          },
        });
      }

      return appState.dispatch({
        type: APP_ACTIONS.ADD_LIST_ITEM,
        payload: {
          item: new ListItem(
            itemName,
            description,
            dueDatetime,
            appState.state.currentList.id
          ),
        },
      });
    },
  });

  return (
    <StyledForm className="create-list-item-form" onSubmit={handleSubmit}>
      <div className="item-name-field">
        <label htmlFor="itemName" className={errors.itemName ? 'error' : ''}>
          {errors.itemName ? errors.itemName : 'Item Name'}
        </label>
        <br />
        <input
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Apple"
          autoFocus
          value={values.itemName}
          onChange={handleChange}
        />
      </div>
      <div className="description-field">
        <label
          htmlFor="description"
          className={errors.description ? 'error' : ''}
        >
          {errors.description ? errors.description : 'Description'}
        </label>
        <br />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Keeps the doctor away"
          value={values.description}
          onChange={handleChange}
        />
      </div>
      <div className="due-datetime-field">
        <label
          htmlFor="dueDatetime"
          className={errors.dueDatetime ? 'error' : ''}
        >
          {errors.dueDatetime ? errors.dueDatetime : 'Due By'}
        </label>
        <br />
        <input
          type="datetime-local"
          name="dueDatetime"
          id="dueDatetime"
          min={toLocale(getNow())}
          value={values.dueDatetime}
          onChange={handleChange}
        />
      </div>
      <CommonButton text="Create Item" type="submit" />
    </StyledForm>
  );
};

export default CreateListItemForm;
