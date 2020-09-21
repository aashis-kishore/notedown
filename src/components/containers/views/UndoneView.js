import React from 'react';
import { hasExpired } from '../../../lib/utils';
import Card, { CARDS } from '../../cards/Card';

const UndoneView = ({ appState }) => {
  return (
    <div className="undone-view">
      {appState.state.items.map((item) => {
        if (!item.isDone && hasExpired(item.dueDatetime))
          return <Card cardType={CARDS.CHARTS} key={item.id} item={item} />;
        return null;
      })}
    </div>
  );
};

export default UndoneView;
