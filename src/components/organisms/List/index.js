import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import Item from '../../molecules/ItemList';
import InsertItem from '../../molecules/InsertItem';

import { ListItems, ItemList } from './styles';

const List = ({ showMore }) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  const [items, setItems] = useState(list);
  const [page, setPage] = useState(1);
  const groupBy = list.length;
  const [itemsLength, setItemsLength] = useState(groupBy);
  const [showLoadMore, setShowLoadMore] = useState(showMore);
  const [id, setId] = useState('');

  const handleToEdit = item => {
    dispatch(MapDispachToActions.editToList(item));
  };

  const handleToDelete = item => {
    dispatch(MapDispachToActions.deleteToList(item));
  };

  const handlePrint = item => {
    dispatch(MapDispachToActions.editToPrint(item));
  };

  const handleLoadMore = () => {
    if (showMoreItems()) {
      showMoreItems();
    }
    const newPage = page + 1;
    setPage(newPage);
  };

  const showMoreItems = () => {
    setItems(items);
  };

  useEffect(() => {
    setShowLoadMore(showMore);
    setItems(list);
  }, [showMore, list]);

  useEffect(() => {
    const showItemsLength = groupBy * page;
    setItemsLength(showItemsLength);
    const hasMore = showItemsLength < items.length;
    setShowLoadMore(hasMore);
  }, [page, groupBy, items]);

  const handleDelete = id => {
    handleToDelete(id);
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

  return (
    <ListItems>
      {items.map((item, index) => {
        return (
          index < itemsLength && (
            <ItemList
              itemsPerPage={groupBy}
              page={page}
              index={index}
              key={item.id}
            >
              {item.id === id ? (
                <InsertItem data={item} onCreate={hendleCreate} />
              ) : (
                <Item
                  data={item}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onCheck={handleCheck}
                />
              )}
            </ItemList>
          )
        );
      })}
      {showLoadMore && <button onClick={handleLoadMore}>Show more</button>}
    </ListItems>
  );
};

List.defaultProps = {
  showMore: false,
};

List.propTypes = {
  /**
   * Essa propriedade é responsavel por informar se averá o botão de ver mais ou não.
   * Ele só aparece se realmente houver mais items para serem carregados.
   */
  showMore: PropTypes.bool,
};

export default List;
