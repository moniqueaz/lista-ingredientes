import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { uuid } from 'uuidv4';

import {
  Input,
  Button,
  Metric,
  Radio,
  Label,
  Create,
  MetricItem,
} from './styles';

const CreateItem = ({ onCreate }) => {
  const [ingredient, setIngredient] = useState('');
  const [metric, setMetric] = useState('');

  const handleMetric = e => {
    const value = e.target.value;
    setMetric(...value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(' Item : ', {
      id: uuid(),
      name: ingredient,
      metric: metric,
    });
    onCreate({
      id: uuid(),
      name: ingredient,
      metric: metric,
    });
  };

  return (
    <Create onSubmit={e => handleSubmit(e)}>
      <Input
        type="text"
        onChange={e => setIngredient(e.target.value)}
        required
        placeholder="Insira um ingrediente"
      />
      <Metric>
        <MetricItem>
          <Radio
            type="radio"
            id="km"
            name="metric"
            value="km"
            required
            onChange={e => handleMetric(e)}
          />
          <Label htmlFor="km">km</Label>
        </MetricItem>
        <MetricItem>
          <Radio
            type="radio"
            id="ml"
            name="metric"
            value="ml"
            required
            onChange={e => handleMetric(e)}
          />
          <Label htmlFor="ml">ml</Label>
        </MetricItem>
      </Metric>
      <Button type="submit">
        <FaCheckCircle />
      </Button>
    </Create>
  );
};

CreateItem.defaultProps = {
  onCreate: () => undefined,
};

CreateItem.propTypes = {
  onCreate: PropTypes.func,
};

export default CreateItem;
