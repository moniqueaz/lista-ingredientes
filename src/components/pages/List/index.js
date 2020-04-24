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
  const [id, setId] = useState('');
  const [page, setPage] = useState(1);

  const handleList = item => {
    setPage(page + 1);
    dispatch(MapDispachToActions.mountToList(item));
  };

  const handleSetList = toList => {
    dispatch(MapDispachToActions.setToList(toList));
  };

  const handleLocalstorage = toList => {
    localStorage.setItem('list', JSON.stringify(toList));
  };

  const handleToEdit = item => {
    dispatch(MapDispachToActions.editToList(item));
  };

  const handleToDelete = item => {
    dispatch(MapDispachToActions.deleteToList(item));
  };

  const handlePrint = item => {
    dispatch(MapDispachToActions.mountToPrint(item));
  };

  const handleDelete = item => {
    handlePrint(item);
    handleToDelete(item.id);
  };

  const handleEdit = id => {
    setId(id);
  };

  const hendleCreate = itemEdit => {
    setId('');
    handleToEdit(itemEdit);
  };

  const handleCheck = item => {
    handlePrint(item);
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
        <ListItems
          list={list}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCreate={hendleCreate}
          onCheck={handleCheck}
          id={id}
          pagination={page}
        />
      </div>
    </Container>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
