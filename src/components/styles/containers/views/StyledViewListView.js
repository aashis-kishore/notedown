import styled from "styled-components";

const StyledViewListView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;

  .list-item-card-wrapper {
    max-height: 80%;
    min-width: 25%;
    max-width: 50%;
    overflow-y: auto;
  }
`;

export default StyledViewListView;
