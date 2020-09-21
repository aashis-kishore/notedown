import React from 'react';
import { useContext } from 'react';
import { APP_ACTIONS, VIEWS } from '../../hooks/useAppState';
import ControlButton, { CONTROL_BUTTON_TYPES } from '../buttons/ControlButton';
import { AppContext } from '../containers/App';
import StyledListItemCard from '../styles/cards/StyledListItemCard';

const ListItemCard = ({ item, handleClick }) => {
  const appState = useContext(AppContext);

  return (
    <StyledListItemCard className="list-item-card" onClick={handleClick}>
      <div className="content">
        <h3 className="list-item-card-title">{item.itemName}</h3>
        {item.description && (
          <p className="list-item-card-description">{item.description}</p>
        )}
      </div>
      <div className="controls">
        <ControlButton
          className={CONTROL_BUTTON_TYPES.TIMES}
          onClick={(event) => {
            event.stopPropagation();
            return appState.dispatch({
              type: APP_ACTIONS.DELETE_LIST_ITEM,
              payload: { id: item.id },
            });
          }}
        />
        <ControlButton
          className={CONTROL_BUTTON_TYPES.PEN}
          onClick={(event) => {
            event.stopPropagation();
            return appState.dispatch({
              type: VIEWS.CREATE_LIST_ITEM,
              payload: { item: item },
            });
          }}
        />
      </div>
    </StyledListItemCard>
  );
};

export default ListItemCard;
