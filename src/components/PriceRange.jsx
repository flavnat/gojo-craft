import React, { useState } from 'react';
import Slider from 'rc-slider'

const { Range } = Slider;

export default function PriceRange({ min = 0, max = 100000, step = 1000, onChange }) {
  const [range, setRange] = useState([min, max]);

  const handleChange = (value) => {
    setRange(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-100">
      <Range
        min={min}
        max={max}
        step={step}
        value={range}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: '#000' }]}
        handleStyle={[{ backgroundColor: '#000' }, { backgroundColor: '#000' }]}
        railStyle={{ backgroundColor: '#000' }}
      />
      <div className="text-gray-600 text-sm">
        Price: <strong>Br{range[0].toLocaleString()}</strong> — <strong>Br{range[1].toLocaleString()}</strong>
      </div>
    </div>
  );
}
