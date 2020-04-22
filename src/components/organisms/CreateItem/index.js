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
  const [km, setKm] = useState(false);
  const [ml, setMl] = useState(false);

  const handleMetric = (e, name) => {
    const value = e.target.value;
    setMetric(value);
    name === 'km' ? setKm(true) : setMl(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreate({
      id: uuid(),
      name: ingredient,
      metric: metric.value,
    });
    setMetric(metric);
    setIngredient('');
    setMl(false);
    setKm(false);
  };

  return (
    <Create onSubmit={e => handleSubmit(e)}>
      <Input
        type="text"
        onChange={e => setIngredient(e.target.value)}
        required
        placeholder="Insira um ingrediente"
        value={ingredient}
      />
      <Metric>
        <MetricItem>
          <Radio
            type="radio"
            id="km"
            name="metric"
            value="km"
            required
            onChange={e => handleMetric(e, 'km')}
            checked={km}
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
            onChange={e => handleMetric(e, 'ml')}
            checked={ml}
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
