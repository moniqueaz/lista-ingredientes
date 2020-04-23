import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  wifht: 100%;
`;

export const List = styled.ul`
  margin-left: 20px;
`;

export const Item = styled.li`
  list-style: decimal;

  & + li {
    border-top: 1px dashed black;
    margin-top: 10px;
    padding-top: 10px;
  }
`;
