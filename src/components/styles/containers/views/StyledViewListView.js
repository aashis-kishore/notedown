import styled from "styled-components";

const StyledViewListView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

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

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (min-width: 1025px) {
    width: 40%;
  }
`;

export default StyledViewListView;
