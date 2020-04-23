import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Item = styled.div`
  width: auto;

  padding: 15px 10px;
  border-radius: 4px;

  display: inline-block;
  display: flex;
  justify-contente: flex-start;
  align-items: center;

  color: ${color.blue};
  text-transform: uppercase;
  font-style: italic;

  .item {
    &__icon {
      &--edit {
        color: ${color.blue};
      }
      &--delete {
        color: ${color.red};
      }
    }
  }
`;

export const Name = styled.div`
  flex: 1 1 auto;
`;

export const Icons = styled.div`
  flex: 1 1 100px;
  text-align: right;
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  & + button {
    margin-left: 20px;
  }
`;
