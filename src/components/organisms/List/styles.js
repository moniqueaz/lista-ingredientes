import styled, { keyframes } from 'styled-components';
import { color } from '../../../styles/variables';

const animateIn = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ListItems = styled.ul``;

export const ItemList = styled.li`
  animation-name: ${animateIn};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-delay: ${props =>
    props.index - (props.page - 1) * props.itemsPerPage < 0
      ? -1
      : (props.index - (props.page - 1) * props.itemsPerPage) / 10}s;
  animation-fill-mode: both;
  transform-origin: 50% 0;
  height: 100%;
`;
