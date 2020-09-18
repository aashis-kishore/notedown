import React, { useContext } from "react";
import { APP_ACTIONS } from "../../hooks/useAppState";
import { getRemaining } from "../../lib/utils";
import { AppContext } from "../containers/App";
import StyledChartsCard from "../styles/cards/StyledChartsCard";

const ChartsCard = ({ item, hasDueDatetime, hasDone }) => {
  const appState = useContext(AppContext);

  return (
    <StyledChartsCard className={`charts-card${item.isDone ? " is-done" : ""}`}>
      <h3 className="charts-card-title">{item.itemName}</h3>
      <div className="charts-card-body">
        <div className="section1">
          {item.description && (
            <p className="charts-card-description">{item.description}</p>
          )}
          {hasDueDatetime && (
            <p className="charts-card-duedatetime">
              {getRemaining(item.dueDatetime)}
            </p>
          )}
        </div>
        {hasDone && (
          <div className="section2">
            <i
              className="fas fa-check fa-lg"
              onClick={() =>
                appState.dispatch({
                  type: APP_ACTIONS.MARK_AS_DONE,
                  payload: { id: item.id },
                })
              }
            ></i>
          </div>
        )}
      </div>
    </StyledChartsCard>
  );
};

export default ChartsCard;
