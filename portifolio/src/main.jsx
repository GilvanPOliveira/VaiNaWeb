import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyle  />
  </React.StrictMode>
);
