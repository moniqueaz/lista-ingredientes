import styled, { keyframes } from 'styled-components';
import { color } from '../../../styles/variables';

export const Create = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${color.yellowDark};
  border-radius: 30px;
  height: 50px;
  overflow: hidden;
  padding-left: 15px;
  position: relative;
  &:after {
    content: '';
    height: 35px;
    width: 1px;
    position: absolute;
    top: 50%;
    right: 191px;
    background-color: ${color.yellowDark};
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 0;
  max-width: 100%;
  flex: 1 1 100%;
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  color: ${color.blue};
  font-weight: bold;

  &::placeholder {
    color: ${color.yellowDark};
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: normal;
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
  height: 100%;
  margin-left: 20px;
`;

export const MetricItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: bold;
  color: ${props => (props.checked ? color.blue : color.grayLight)};
  height: 100%;
  width: 50px;
  flex: 0 0 50px;
`;

export const Radio = styled.input`
  appearance: none;
`;

export const Label = styled.label``;
