import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
