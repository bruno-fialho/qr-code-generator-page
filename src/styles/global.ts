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
    background: #fff;
    color: #212121;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
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