import React from 'react';
import StyledHomeView from '../../styles/containers/views/StyledHomeView';
import Charts from '../Charts';
import CommonButton, { COMMON_BUTTON_TYPES } from '../../buttons/CommonButton';
import { VIEWS } from '../../../hooks/useAppState';
import { chartsInitState } from '../../../lib/initStates';

const HomeView = ({ appState }) => {
  return (
    <StyledHomeView className="home-view">
      <Charts initState={chartsInitState} />
      <div className="wrapper">
        <CommonButton
          btnType={COMMON_BUTTON_TYPES.DEFAULT}
          text="Create List"
          onClick={() => appState.dispatch({ type: VIEWS.CREATE_LIST })}
        />
      </div>
    </StyledHomeView>
  );
};

export default HomeView;
