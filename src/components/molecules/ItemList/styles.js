import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Item = styled.label`
  width: auto;

  padding: 15px 10px;

  display: inline-block;
  display: flex;
  justify-contente: flex-start;
  align-items: center;

  color: ${color.blue};
  text-transform: uppercase;
  font-style: italic;

  background-color: ${props => props.check && color.grayDarker};
  font-weight: ${props => props.check && 'bold'};

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
  -webkit-appearance: none;
`;

export const Button = styled.button`
  & + button {
    margin-left: 20px;
  }
`;
