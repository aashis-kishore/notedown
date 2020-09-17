import React from "react";
import CommonButton from "../../buttons/CommonButton";
import StyledChartsTabs from "../../styles/containers/panes/StyledChartsTabs";

const ChartsTabs = () => {
  return (
    <StyledChartsTabs className='charts-tabs'>
      <CommonButton text="All" />
      <CommonButton text="Upcoming" />
      <CommonButton text="Done" />
      <CommonButton text="Undone" />
    </StyledChartsTabs>
  );
};

export default ChartsTabs;
