import styled, { keyframes } from 'styled-components';
import { color } from '../../../styles/variables';

export const Create = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px dashed ${color.yellowDark};
  margin-right: 10px;
  max-width: 100%;
  flex: 1 1 100%;
  width: 50%;
  &::placeholder {
    color: ${color.yellowDark};
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  color: ${color.green};
  width: 55px;
  align-self: stretch;
  display: flex;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Metric = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 25px;
`;

export const MetricItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & + div {
    margin-left: 15px;
  }
`;

export const Radio = styled.input``;

export const Label = styled.label`
  margin-left: 5px;
`;
