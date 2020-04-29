import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const SessionLeft = styled.div`
  flex: 1 1 100%;
  width: 100%;
  @media (min-width: 1024px) {
    flex: 0 0 calc(60% - 20px);
  }
`;

export const SessionRight = styled.div`
  flex: 1 1 100%;
  margin-top: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    flex: 0 0 40%;
    margin-top: 0;
  }
`;
