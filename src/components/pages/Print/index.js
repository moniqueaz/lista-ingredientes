import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import {
  Container,
  List,
  Item,
  Input,
  Metric,
  Name,
  Form,
  Button,
} from './styles';

const Print = () => {
  const print = useSelector(state => state.print);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePrint = () => {
    // dispatch(MapDispachToActions.editToPrint());
  };

  useEffect(() => {
    !print.length && history.push('/');
  }, []);

  const handleSubmit = () => {
    window.print();
  };

  return (
    <>
      {print.length !== 0 && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Button type="submit">Imprimir</Button>
            <List>
              {print.map(item => {
                return (
                  <Item>
                    <Name>{item.name}</Name>
                    <div className="print__metric">
                      <Input type="number" required />
                      <Metric>{item.metric}</Metric>
                    </div>
                  </Item>
                );
              })}
            </List>
          </Form>
        </Container>
      )}
    </>
  );
};

Print.defaultProps = {};

Print.propTypes = {};

export default Print;
