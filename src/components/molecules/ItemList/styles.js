import styled from 'styled-components';

export const Item = styled.div`
  width: auto;
  border: 1px solid black;

  padding: 10px;
  border-radius: 4px;

  display: inline-block;
  display: flex;
  justify-contente: flex-start;
  align-items: center;
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
