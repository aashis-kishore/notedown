import React from 'react';
import { APP_ACTIONS } from '../../hooks/useAppState';
import ControlButton, { CONTROL_BUTTON_TYPES } from '../buttons/ControlButton';
import StyledListCard from '../styles/cards/StyledListCard';

const ListCard = ({ appState, list, handleClick }) => {
  return (
    <StyledListCard
      className={`list-card${
        appState.state.currentList && appState.state.currentList.id === list.id
          ? ' card-active'
          : ''
      }`}
      onClick={handleClick}
    >
      <div className="content">
        <h3 className="list-card-title">{list.listName}</h3>
      </div>
      <div className="controls">
        <ControlButton
          className={CONTROL_BUTTON_TYPES.TIMES}
          onClick={(event) => {
            event.stopPropagation();
            return appState.dispatch({
              type: APP_ACTIONS.DELETE_LIST,
              payload: { id: list.id },
            });
          }}
        />
      </div>
    </StyledListCard>
  );
};

export default ListCard;
