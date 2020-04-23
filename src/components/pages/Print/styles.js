import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  width: 500px;
  height: calc(100vh - 200px);
  margin: 0 auto;
  background-color: ${color.primary};
  .print {
    &__metric {
      display: flex;
      justify-content: flex-end;
      align-item: center;
      flex: 1 1 auto;
    }
  }
`;

export const Header = styled.div``;

export const List = styled.ul`
  margin-left: 20px;
`;

export const Item = styled.li`
  list-style: decimal;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & + li {
    border-top: 1px dashed black;
    margin-top: 10px;
    padding-top: 10px;
  }
`;

export const Input = styled.input`
  width: 50px;
`;
export const Metric = styled.span`
  margin-left: 10px;
`;
export const Name = styled.span`
  flex: 1 1 auto;
`;
