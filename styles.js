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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("/bowling-image.jpg");
  }
  
`;
