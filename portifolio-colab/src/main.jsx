import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
