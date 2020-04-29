import styled, { keyframes } from 'styled-components';
import { color } from '../../../styles/variables';

export const Create = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
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
  border: 1px solid ${color.gray};
  flex: 1 1 100%;

  @media (min-width: 1024px) {
    flex: 1 0 auto;
  }

  &::placeholder {
    color: ${color.yellowDark};
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: normal;
  }
`;

export const Button = styled.button`
  color: ${color.green};
  width: 75px;
  height: 35px;
  display: flex;
  justify-content: center;
  background-color: ${color.blue};
  color: ${color.white};
  border-radius: 4px;
  flex: 0 0 50px;
  @media (min-width: 1024px) {
    flex: 0 0 50px;
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
  color: ${props => (props.checked ? color.blue : color.gray)};
  height: 100%;
  width: 50px;
  flex: 0 0 50px;
`;

export const Radio = styled.input`
  appearance: none;
`;

export const Label = styled.label`
  border: 1px solid ${color.grayLight};
  width: 50%;
  flex: 1 1 50%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
