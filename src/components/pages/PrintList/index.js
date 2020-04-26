import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FaPrint } from 'react-icons/fa';

import { Container, List, Item, Header, Total } from './styles';

const PrintList = () => {
  const { print } = useSelector(state => state.print);
  console.log('print: ', print);

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
      <Total>
        {print.length} {print.length === 1 ? 'item' : 'items'}
      </Total>
    </Container>
  );
};

PrintList.defaultProps = {};

PrintList.propTypes = {};

export default PrintList;
