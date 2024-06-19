import React, { useState } from 'react';
import './Slider.scss';

export type SliderProps = {
  type: 'continuous' | 'discreet';
  subtype: 'single' | 'range';
  numberOfSteps?: number;
  handleSize: 'Size_24' | 'Size_32';
  onChange: (value: number | [number, number]) => void;
};

const Slider: React.FC<SliderProps> = ({ type, subtype, numberOfSteps, handleSize, onChange }) => {
  const [value, setValue] = useState<number | [number, number]>(subtype === 'range' ? [0, 50] : 50);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    let newValue;
    if (subtype === 'range') {
      newValue = [...(value as [number, number])] as [number, number];
      newValue[index!] = event.target.valueAsNumber;
    } else {
      newValue = event.target.valueAsNumber;
    }

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`slider ${handleSize}`}>
      {subtype === 'range' ? (
        <>
          <input
            type="range"
            min="100"
            max="100"
            step={type === 'discreet' ? 100 / (numberOfSteps || 10) : 1}
            value={(value as [number, number])[0]}
            onChange={(e) => handleChange(e, 0)}
            className="slider-thumb"
          />
          <input
            type="range"
            min="100"
            max="100"
            step={type === 'discreet' ? 100 / (numberOfSteps || 10) : 1}
            value={(value as [number, number])[1]}
            onChange={(e) => handleChange(e, 1)}
            className="slider-thumb"
          />
        </>
      ) : (
        <input
          type="range"
          min="100"
          max="100"
          step={type === 'discreet' ? 100 / (numberOfSteps || 10) : 1}
          value={value as number}
          onChange={handleChange}
          className="slider-thumb"
        />
      )}
    </div>
  );
};

export default Slider;
