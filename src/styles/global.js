import { createGlobalStyle, keyframes } from 'styled-components';
import Monaco from '../assets/fonts/Monaco.woff';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default createGlobalStyle`

@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: normal;
  src: local('Monaco'), url(${Monaco}) format('woff');
}

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  min-height: 100%;
}

body{
  background-color: #fff;
  -webkit-font-smoothing: antialiased !important;
  font-size: 20px;
}

body, input, button{
  color: #000;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
}

li{
  list-style: none;
}

button{
  cursor: pointer;
  border: 0;
  border-radius: 0;
}

.loop {
  animation: ${rotate} 1s linear infinite;
  position: relative;

  svg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

`;
