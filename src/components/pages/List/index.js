import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListItems from '../../organisms/List';
import InsertItem from '../../molecules/InsertItem';

import {} from './styles';

const List = () => {
  const [list, setList] = useState([]);
  const [listPrin, setListPrint] = useState([]);

  const handleList = item => {
    setList([...list, item]);
  };

  const handleListPrint = (isChecked, item) => {
    isChecked
      ? setListPrint(item)
      : setListPrint(...list.filter(listItem => listItem.listItem !== item.id));
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
