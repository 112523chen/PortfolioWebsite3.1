import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  font: {
    primary: "Inter",
    secondary: "Inconsolata",
  },
  color: {
    lightMode: {
      primary: "#fff",
      secondary: "none",
      accent: "#007bff",
      hover: "#4d4d4d",
      active: "#999999",
    },
    darkMode: {
      primary: "#111827",
      secondary: "#e7e7e7",
      accent: "#00c896",
      hover: "#999999",
      active: "#333333",
    },
  },
};
