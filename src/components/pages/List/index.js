import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import ListItems from '../../organisms/List';
import InsertItem from '../../molecules/InsertItem';

import { Container } from './styles';

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  const handleList = item => {
    dispatch(MapDispachToActions.mountToList(item));
  };

  const handleSetList = toList => {
    dispatch(MapDispachToActions.setToList(toList));
  };

  const handleLocalstorage = toList => {
    localStorage.setItem('list', JSON.stringify(toList));
  };

  useEffect(() => {
    if (list.length) {
      handleLocalstorage(list);
    } else {
      const storage = JSON.parse(localStorage.getItem('list'));
      storage && handleSetList(storage);
    }
  }, [list]);

  return (
    <Container>
      <InsertItem onCreate={handleList} />
      <div className="list__items">
        <ListItems />
      </div>
    </Container>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
