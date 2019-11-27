import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    background: url(${background});
    background-size: 100% 100%;
    -webkit-font-smoothing: antialiased !important;
    display: flex;
    justify-content: center;
    align-items: center
  }

  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  button{
    cursor: pointer;
  }
`;
