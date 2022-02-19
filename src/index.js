import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainProvider from "./Provider/MainProvider";

ReactDOM.render(
  <MainProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MainProvider>,
  document.getElementById("root")
);
