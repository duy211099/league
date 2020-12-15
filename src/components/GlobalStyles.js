import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }  
  body {
    font-family: "Montserrat", sans-serif;
  background-color: rgba(0, 0, 0, 0.1);
  }
  h3{
    font-size:1rem;
  }
`;

export default GlobalStyles;
