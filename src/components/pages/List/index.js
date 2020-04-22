import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListItems from '../../organisms/List';

import {} from './styles';

const List = () => {
  const [list, setList] = useState([]);
  const [listPrin, setListPrint] = useState([]);

  useEffect(() => {
    setList([
      {
        name: 'Macarrã',
      },
      {
        name: 'Café',
      },
    ]);
  }, []);

  const handleListPrint = (isChecked, item) => {
    isChecked
      ? setListPrint(item)
      : setListPrint(...list.filter(listItem => listItem.listItem !== item.id));
  };

  return (
    <>
      <ListItems data={list} />
      <CreateItems onCreate={setList} />
    </>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
