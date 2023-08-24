import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: system-ui;
  }

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    top: 0;
    right: 0;
  }
  
  
  .side-drawer {
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    z-index: 200;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
  }
  
  .side-drawer.open {
    transform: translateX(0);
  }
  

`;
