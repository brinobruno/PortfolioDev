import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #66ecbc;

    --body-text-color: #d9d9d9;
    --body-text-color-alt: #343434;
    --shade-color: #747474;

    --purple: #DF5FFF;
    --green: #27d224;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  span {
    font-family: 'Fira Code', 'consolas', sans-serif;
  }

  button {
    cursor: pointer;
  }
`