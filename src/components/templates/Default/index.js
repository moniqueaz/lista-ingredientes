import React from 'react';

import { Header, Container, Content } from './styles';

const Default = ({ children }) => {
  return (
    <Container>
      <Header>List</Header>
      <Content>{children}</Content>
    </Container>
  );
};

Default.defaultProps = {};

Default.propTypes = {};

export default Default;
