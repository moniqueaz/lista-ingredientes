import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import ListItems from '../../organisms/List';
import InsertItem from '../../molecules/InsertItem';

import {} from './styles';

const List = () => {
  // const [list, setList] = useState([]);
  // const [listPrin, setListPrint] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  console.log('list: ', list);

  const handleList = item => {
    dispatch(MapDispachToActions.mountToList(item));
  };

  return (
    <>
      <ListItems data={list} />
      <InsertItem onCreate={handleList} />
    </>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
