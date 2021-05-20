import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  body {
    background: #f1f3f4;
    color: #202124;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
  }

  #root {
    /* width: 100%; */
    height: 100vh;
  }

  button, input {
    outline: none;
    border: none;
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      outline: none;
      border: none;
      text-decoration: none;
    }
  }

  h2 {
    font-weight: 400;
  }
`;

export default GlobalStyle;
