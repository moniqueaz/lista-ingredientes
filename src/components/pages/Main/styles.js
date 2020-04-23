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
  flex: 0 0 calc(60% - 20px);
  order: 1;
  @media (min-width: 1024px) {
    order: 0;
  }
`;

export const SessionRight = styled.div`
  flex: 0 0 40%;
  order: 0;
  @media (min-width: 1024px) {
    order: 0;
  }
`;
