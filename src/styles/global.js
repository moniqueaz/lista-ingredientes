import { createGlobalStyle, keyframes } from 'styled-components';
import { color } from './variables';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default createGlobalStyle`

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
  background-color: ${color.white};
  -webkit-font-smoothing: antialiased !important;
}

body, input, button{
  color: ${color.black};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}

li{
  list-style: none;
}

button{
  cursor: pointer;
  border: 0;
  border-radius: 0;
  background-color: transparent;
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
