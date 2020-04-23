import React from 'react';
import { format } from 'date-fns';

import { Header, Container, Content, Title, Data } from './styles';

const Default = ({ children }) => {
  const date = format(new Date(), 'dd/MM/yyyy');

  return (
    <Container>
      <Header>
        <Title>Lista de Ingredientes</Title>
        <Data>
          <span>Data: </span>
          {date}
        </Data>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

Default.defaultProps = {};

Default.propTypes = {};

export default Default;
