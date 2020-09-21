import React from 'react';
import { hasExpired } from '../../../lib/utils';
import Card, { CARDS } from '../../cards/Card';

const UpcomingView = ({ appState }) => {
  return (
    <div className="upcoming-view">
      {appState.state.items.map((item) => {
        if (!item.isDone && !hasExpired(item.dueDatetime))
          return (
            <Card
              cardType={CARDS.CHARTS}
              key={item.id}
              item={item}
              hasDueDatetime={true}
              hasDone={!item.isDone}
            />
          );
        return null;
      })}
    </div>
  );
};

export default UpcomingView;
