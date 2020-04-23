import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Container, List, Item, Input, Metric, Name } from './styles';

const Print = () => {
  const print = useSelector(state => state.print);
  const history = useHistory();
  useEffect(() => {
    !print.length && history.push('/');
  }, []);

  return (
    <>
      {print.length !== 0 && (
        <Container>
          <List>
            {print.map(item => {
              return (
                <Item>
                  <Name>{item.name}</Name>
                  <div className="print__metric">
                    <Input type="number" />
                    <Metric>{item.metric}</Metric>
                  </div>
                </Item>
              );
            })}
          </List>
        </Container>
      )}
    </>
  );
};

Print.defaultProps = {};

Print.propTypes = {};

export default Print;
