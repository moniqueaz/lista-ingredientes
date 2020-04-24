import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Item from '../../molecules/ItemList';
import InsertItem from '../../molecules/InsertItem';

import { ListItems, ItemList } from './styles';

const List = ({
  showMore,
  id,
  onCreate,
  onEdit,
  onDelete,
  onCheck,
  list,
  pagination,
}) => {
  const [items, setItems] = useState(list);
  const [page, setPage] = useState(pagination);
  const groupBy = list.length;
  const [itemsLength, setItemsLength] = useState(groupBy);
  const [showLoadMore, setShowLoadMore] = useState(showMore);

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
    setPage(pagination);
    setItems(list);
  }, [showMore, list]);

  useEffect(() => {
    const showItemsLength = groupBy * page;
    setItemsLength(showItemsLength);
    const hasMore = showItemsLength < items.length;
    setShowLoadMore(hasMore);
  }, [page, groupBy, items]);

  const handleDelete = item => {
    onDelete(item);
  };

  const handleEdit = item => {
    onEdit(item);
  };

  const hendleCreate = itemEdit => {
    onCreate(itemEdit);
  };

  const handleCheck = (check, item) => {
    onCheck(check, item);
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
  onCheck: () => undefined,
  onCreate: () => undefined,
  onDelete: () => undefined,
  onEdit: () => undefined,
  list: [],
  pagination: 1,
};

List.propTypes = {
  /**
   * Essa propriedade é responsavel por informar se averá o botão de ver mais ou não.
   * Ele só aparece se realmente houver mais items para serem carregados.
   */
  showMore: PropTypes.bool,
};

export default List;
