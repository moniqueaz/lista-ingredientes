import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FaPrint } from 'react-icons/fa';

import { Container, List, Item, Header } from './styles';

const PrintList = () => {
  const print = useSelector(state => state.print);

  return (
    <Container>
      <Header>
        <h2>Imprimir Lista</h2>
        {print.length !== 0 && (
          <Link to="/print">
            <FaPrint />
          </Link>
        )}
      </Header>
      <List>
        {print.map(item => {
          return <Item key={item.id}>{item.name}</Item>;
        })}
      </List>
    </Container>
  );
};

PrintList.defaultProps = {};

PrintList.propTypes = {};

export default PrintList;
