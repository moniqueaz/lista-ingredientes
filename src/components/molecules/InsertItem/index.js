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

const InsertItem = ({ onCreate, data }) => {
  const [ingredient, setIngredient] = useState('');
  const [metric, setMetric] = useState('kg');
  const [radio, setRadio] = useState({ value: 'kg', checked: true });

  const handleMetric = e => {
    const value = e.target.value;
    setMetric(value);
    setRadio({
      value: value,
      checked: true,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreate({
      id: data.id ? data.id : uuid(),
      name: ingredient,
      metric: metric,
    });
    setMetric('kg');
    setIngredient('');
    setRadio({ value: 'kg', checked: true });
  };

  useEffect(() => {
    if (data.id) {
      setIngredient(data.name);
      setMetric(data.metric);
      setRadio({ value: data.metric, checked: true });
    }
  }, [data]);

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
        <MetricItem checked={radio.value === 'kg' && radio.checked}>
          <Radio
            type="radio"
            id={data.id ? `kg-${data.id}` : 'kg'}
            name="metric"
            value="kg"
            required
            onChange={e => handleMetric(e)}
            checked={radio.value === 'kg' ? radio.checked : false}
          />
          <Label htmlFor={data.id ? `kg-${data.id}` : 'kg'}>kg</Label>
        </MetricItem>
        <MetricItem checked={radio.value === 'ml' && radio.checked}>
          <Radio
            type="radio"
            id={data.id ? `ml-${data.id}` : 'ml'}
            name="metric"
            value="ml"
            required
            onChange={e => handleMetric(e)}
            checked={radio.value === 'ml' ? radio.checked : false}
          />
          <Label htmlFor={data.id ? `ml-${data.id}` : 'ml'}>ml</Label>
        </MetricItem>
      </Metric>
      <Button type="submit">
        <FaCheckCircle />
      </Button>
    </Create>
  );
};

InsertItem.defaultProps = {
  onCreate: () => undefined,
  data: {},
};

InsertItem.propTypes = {
  onCreate: PropTypes.func,
};

export default InsertItem;
