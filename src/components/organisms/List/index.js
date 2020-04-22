import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Item from '../../molecules/ItemList';

import { ListItems, ItemList } from './styles';

const List = ({ data, showMore }) => {
  const [items, setItems] = useState(data);
  const [page, setPage] = useState(1);
  const groupBy = data.length;
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
    setShowLoadMore(showMore);
    setItems(data);
  }, [showMore, data]);

  useEffect(() => {
    const showItemsLength = groupBy * page;
    setItemsLength(showItemsLength);
    const hasMore = showItemsLength < items.length;
    setShowLoadMore(hasMore);
  }, [page, groupBy, items]);

  const handleDelete = () => {};

  const handleEdit = () => {};

  const handleCheck = () => {};

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
              <Item
                data={item}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onCheck={handleCheck}
              />
            </ItemList>
          )
        );
      })}
      {showLoadMore && <button onClick={handleLoadMore}>Show more</button>}
    </ListItems>
  );
};

List.defaultProps = {
  data: [],
  showMore: false,
};

List.propTypes = {
  /**
   * Essa propriedade é responsavel por setar a lista de items
   */
  data: PropTypes.array,
  /**
   * Essa propriedade é responsavel por informar se averá o botão de ver mais ou não.
   * Ele só aparece se realmente houver mais items para serem carregados.
   */
  showMore: PropTypes.bool,
};

export default List;
