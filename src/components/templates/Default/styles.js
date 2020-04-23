import styled from 'styled-components';
import { color } from '../../../styles/variables';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  background-color: ${color.grayLight};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 1;
  border-bottom: 1px solid ${color.grayDark};
`;

export const Content = styled.div`
  z-index: 0;
  background-color: ${color.grayLight};
  padding: 20px;
`;

export const Title = styled.h2``;

export const Data = styled.span`
  font-size: 14px;
`;
