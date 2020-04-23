import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  width: 100%;
`;

export const Total = styled.div`
  width: 100%;
  padding-top: 25px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 35px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: ${color.blue};
    color: ${color.white};
  }
`;

export const List = styled.ul`
  padding-left: 20px;
  height: calc(100vh - 224px);
  overflow-y: scroll;
`;

export const Item = styled.li`
  list-style: decimal;

  & + li {
    border-top: 1px dashed black;
    margin-top: 10px;
    padding-top: 10px;
  }
`;
