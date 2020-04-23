import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
