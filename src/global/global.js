import { createGlobalStyle } from 'styled-components'
import backgroundImg from '../assets/images/background.png'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #66ecbc;

    --body-text-color: #d9d9d9;
    --body-text-color-alt: #343434;
    --shade-color: #747474;

    --purple: #DF5FFF;
    --green: #27d224;

    --opening-font: 5rem;
    --opening-subtitle: 1.82rem;
    --heading-title: 2.875rem;
    --body-text-font: 1.125rem; //18px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialised;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    color: var(--body-text-color)
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;

    color: var(--body-text-color)
  }

  span {
    font-family: 'Fira Code', 'consolas', sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(---body-text-color);
  }
`