import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
  }
`;

export default AppStyle;
