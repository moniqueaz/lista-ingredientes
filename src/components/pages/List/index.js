import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {} from './styles';

const List = () => {
  const [list, setList] = useState([]);
  const [listPrin, setListPrint] = useState([]);

  const handleListPrint = (isChecked, item) => {
    isChecked
      ? setListPrint(item)
      : setListPrint(...list.filter(listItem => listItem.listItem !== item.id));
  };

  return (
    <>
      {list.map(item => {
        return <Item data={item} onCheck={handleListPrint} />;
      })}
    </>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
