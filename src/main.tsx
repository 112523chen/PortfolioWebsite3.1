import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter";
  background-color: #fff;
}
body.dark-mode {
  background-color: #111827;
  color: #e7e7e7;
}
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
