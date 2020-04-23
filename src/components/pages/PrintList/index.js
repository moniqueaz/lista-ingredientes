import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Container, List, Item } from './styles';

const PrintList = () => {
  const print = useSelector(state => state.print);

  useEffect(() => {
    console.log('print: ', print);
  }, [print]);

  return (
    <Container>
      <h1>Print</h1>
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
