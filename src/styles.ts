import {createGlobalStyle,ThemeProvider} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, Asimov, Serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f7f3f7;
    color: #585858;
  }
  
  
  @font-face {
    font-family: 'Roboto', sans-serif;
    src:  url('./assets/fonts/roboto-v20-latin-regular.woff') format('woff') ;
  }

  @font-face {
    font-family: 'Asimov';
    src: url(./assets/fonts/asimov.otf) format('opentype');
  }
  
  `
export default GlobalStyle