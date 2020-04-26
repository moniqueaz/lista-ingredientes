import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual, format } from 'date-fns';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import ListItems from '../../organisms/List';
import InsertItem from '../../molecules/InsertItem';

import { Container } from './styles';

const List = () => {
  const dispatch = useDispatch();
  const { date } = useSelector(state => state.print);
  const [list, setList] = useState(
    localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
  );
  const [id, setId] = useState('');
  const [page, setPage] = useState(1);

  const handleList = item => {
    setPage(page + 1);
    setList([...list, item]);
    handleLocalstorage([...list, item]);
  };

  const handleLocalstorage = toList => {
    localStorage.setItem('list', JSON.stringify(toList));
  };

  const handleToEdit = item => {
    const newList = list.map(itemList => {
      if (itemList.id === item.id) {
        return { ...item };
      } else {
        return itemList;
      }
    });
    setList([...newList]);
  };

  const handleToDelete = id => {
    const newList = list.filter(item => {
      return item.id !== id;
    });
    setList([...newList]);
  };

  const handlePrint = items => {
    const newList = items.filter(item => item.isCheck);
    dispatch(MapDispachToActions.mountToPrint(newList));
  };

  const editPrint = (item, isCheck) => {
    dispatch(MapDispachToActions.editToPrint(item, isCheck));
  };

  const handleDate = date => {
    dispatch(MapDispachToActions.mountToDate(date));
  };

  const handleDelete = item => {
    handleToDelete(item.id);
  };

  const handleEdit = item => {
    setId(item.id);
  };

  const hendleCreate = item => {
    setId('');
    handleToEdit(item);
  };

  const getLocalstorage = () => {
    return JSON.parse(localStorage.getItem('list'));
  };

  const handleCheck = (isCheck, item) => {
    const { id, name, metric, value } = item;
    const newList = list.map(itemList => {
      if (itemList.id === item.id) {
        return {
          id,
          name,
          metric,
          value,
          isCheck,
        };
      } else {
        return itemList;
      }
    });

    setList([...newList]);
    editPrint(item, isCheck);
  };

  const validDate = () => {
    const dateSave = Date.parse(date ? date : localStorage.getItem('date'));
    const newDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    handleDate(newDate);
    localStorage.setItem('date', newDate);

    return isEqual(dateSave, newDate);
  };

  useEffect(() => {
    const result = validDate();
    console.log('result: ', result);
    if (!result) {
      setList(
        list.map(item => {
          const { id, name, metric } = item;
          return {
            id,
            name,
            metric,
            isCheck: false,
          };
        })
      );
    }
  }, []);

  useEffect(() => {
    handleLocalstorage(list);
    handlePrint(list);
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
