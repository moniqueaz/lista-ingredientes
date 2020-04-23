import React from 'react';
import PropTypes from 'prop-types';
import PrintList from '../PrintList';
import List from '../List';

import { Container, SessionLeft, SessionRight } from './styles';

const Main = () => {
  return (
    <Container>
      <SessionLeft>
        <List />
      </SessionLeft>
      <SessionRight>
        <PrintList />
      </SessionRight>
    </Container>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
