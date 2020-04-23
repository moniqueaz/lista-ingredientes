import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { Item, Name, Icons, Input, Button } from './styles';

const ItemList = ({ data, onCheck, onEdit, onDelete }) => {
  const { name, id } = data;

  const handleChecked = item => {
    onCheck(item);
  };

  return (
    <Item>
      <Input type="checkbox" onChange={e => handleChecked(data)} name={name} />
      <Name>{name}</Name>
      <Icons className="item__icon">
        <Button
          type="button"
          onClick={() => onEdit(id)}
          className="item__icon--edit"
        >
          <FaEdit />
        </Button>
        <Button type="button" onClick={onDelete} className="item__icon--delete">
          <FaTrash />
        </Button>
      </Icons>
    </Item>
  );
};

ItemList.defaultProps = {
  onCheck: () => undefined,
  data: {},
};

ItemList.propTypes = {
  /**
   * Essa propriedade é responsavel por informar os dados do componente.
   */
  data: PropTypes.object,
  /**
   * Essa propriedade é responsavel por receber a função que será chamada o onChange
   * do input.
   */
  onCheck: PropTypes.func,
  /**
   * Essa propriedade é responsavel por receber a função de editar.
   */
  onEdit: PropTypes.func,
  /**
   * Essa propriedade é responsavel por receber a função deletar.
   */
  onDelete: PropTypes.func,
};

export default ItemList;
