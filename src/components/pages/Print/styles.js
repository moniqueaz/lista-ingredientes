import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  margin: 0 auto;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .print {
    &__metric {
      display: flex;
      justify-content: flex-end;
      align-item: center;
      flex: 1 1 auto;
    }
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &--summary {
        padding-top: 30px;
        font-weight: bold;
        list-style: none;
        margin-left: 0;
      }
    }
  }
`;

export const Header = styled.div``;

export const Form = styled.form`
  .print {
    &__button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0 50px;
      &-ban {
        width: 150px;
        background-color: ${color.grayLighter};
        span {
          margin-left: 10px;
        }
      }
      &-print {
        span {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const Button = styled.button`
  background-color: ${color.blue};
  padding: 10px;
  width: 110px;
  border-radius: 4px;
  color: ${color.white};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;

  diplay: flex;
  justify-content: center;
  align-items: center;

  @media print {
    display: none;
  }
`;

export const List = styled.ul`
  margin-left: 20px;
  background-color: ${color.primary};
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 1024px) {
    width: 500px;
  }
`;

export const Item = styled.li`
  list-style: decimal;
  margin-left: 10px;
  & + li {
    border-top: 1px dashed black;
    margin-top: 10px;
    padding-top: 10px;
  }
`;

export const Input = styled.input`
  width: 50px;
  border: 0;
  border-bottom: 1px solid black;
  text-align: center;
  background-color: transparent;

  @media print {
    border: 0;
    text-align: right;
  }
`;
export const Metric = styled.span`
  margin-left: 10px;
`;
export const Name = styled.span`
  flex: 1 1 auto;
`;
