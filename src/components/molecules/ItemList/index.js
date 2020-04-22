import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { Item, Name, Icons, Input, Button } from './styles';

const ItemList = ({ data, onCheck, onEdit, onDelete }) => {
  const { name } = data;

  const handleChecked = e => {
    onCheck(e.target.checked);
  };

  return (
    <Item>
      <Input type="checkbox" onChange={e => handleChecked(e)} name={name} />
      <Name>{name}</Name>
      <Icons>
        <Button type="button" onClick={onEdit}>
          <FaEdit />
        </Button>
        <Button type="button" onClick={onDelete}>
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
