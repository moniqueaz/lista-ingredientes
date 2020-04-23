import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  background-color: ${color.white};
  height: calc(100vh - 150px);
  width: 100%;
  padding: 20px;

  .list {
    &__items {
      overflow-y: auto;
      height: calc(100% - 50px);
      margin-top: 10px;
    }
  }
`;
