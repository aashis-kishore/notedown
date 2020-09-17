import styled from "styled-components";

const StyledTopPane = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;

  .left-pane-hidden,
  .darkTheme,
  .home {
    color: ${(props) => props.theme.toggleButton.secondary};
  }
`;

export default StyledTopPane;
