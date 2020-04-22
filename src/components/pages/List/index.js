import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListItems from '../../organisms/List';
import CreateItem from '../../organisms/CreateItem';

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
      <CreateItem onCreate={handleList} />
    </>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
