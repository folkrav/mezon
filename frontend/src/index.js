import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./containers/App";
import "./reset.css";

const theme = {
  background: "#eeeeff",
  foreground: "#03030d",
  primary: "#003249",
  warning: "#80ced6",
  error: "#e03616",
  success: "#7dc95e",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
