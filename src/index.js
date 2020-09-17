import React from "react";
import ReactDOM from "react-dom";
import App from "./components/containers/App";
import { appInitState } from "./lib/initStates";

ReactDOM.render(
  <React.StrictMode>
    <App initState={appInitState} />
  </React.StrictMode>,
  document.getElementById("root")
);
