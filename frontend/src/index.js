import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './containers/App';
import "./reset.css";


const theme = {
  darkBlue: "#003249",
  lightBlue: "#80ced6",
  red: "#e03616",
  green: "#7dc95e",
  black: "#03030d",
  white: "#ccdbdc",
};


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
