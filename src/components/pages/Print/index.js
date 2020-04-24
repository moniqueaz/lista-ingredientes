import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import { format } from 'date-fns';
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
  const handleLink = () => {};

  return (
    <>
      {print.length !== 0 && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Button type="submit">
              <span>Imprimir</span>
              <FaPrint />
            </Button>
            <List>
              {print.map(item => {
                return (
                  <Item>
                    <div className="print__item">
                      <Name>{item.name}</Name>
                      <div className="print__metric">
                        <Input type="number" required />
                        <Metric>{item.metric}</Metric>
                      </div>
                    </div>
                  </Item>
                );
              })}
              <Item className="print__item print__item--summary">
                <p>Items: {print.length}</p>
                <p>Data: {format(new Date(), 'dd/MM/yyyy')}</p>
              </Item>
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
