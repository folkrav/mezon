import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
  }

  h1, h2 {
    font-weight: 900;
  }

  h3, h4 {
    font-weight: 700;
  }

  h5, h6 {
    font-weight: 500;
  }

  body {
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <StyledApp>
        <h1>H1 title</h1>
        <h2>H2 title</h2>
        <h3>H3 title</h3>
        <h4>H4 title</h4>
        <h5>H5 title</h5>
        <h6>H6 title</h6>
        <p>Paragraph</p>
      </StyledApp>
    </HelmetProvider>
  );
};

export default App;
