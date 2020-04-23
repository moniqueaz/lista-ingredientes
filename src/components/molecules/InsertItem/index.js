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
  const [metric, setMetric] = useState('');
  const [radio, setRadio] = useState({ value: '', checked: false });

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
    setMetric('');
    setIngredient('');
    setRadio(false);
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
        <MetricItem>
          <Radio
            type="radio"
            id="km"
            name="metric"
            value="km"
            required
            onChange={e => handleMetric(e)}
            checked={radio.value === 'km' ? radio.checked : false}
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
            checked={radio.value === 'ml' ? radio.checked : false}
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

InsertItem.defaultProps = {
  onCreate: () => undefined,
  data: {},
};

InsertItem.propTypes = {
  onCreate: PropTypes.func,
};

export default InsertItem;
