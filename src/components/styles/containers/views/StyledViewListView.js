import styled from "styled-components";

const StyledViewListView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 60%;

  .list-item-card-wrapper {
    min-height: 45%;
    max-height: 90%;
    width: 100%;
    overflow-y: auto;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
  }
`;

export default StyledViewListView;
