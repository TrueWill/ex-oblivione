import React from 'react';

const descriptions = [
  'Primary',
  'Secondary',
  'Tertiary',
  'Quaternary',
  'Quinary',
  'Senary',
  'Septenary',
  'Octonary',
  'Nonary',
  'Denary',
];

interface IProps {
  dots: number[];
  dotValue?: number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Priority: React.FC<IProps> = ({ dots, dotValue, onChange }) => {
  const optionElements = dots.map((value, index) => (
    <option key={index} value={value}>
      {descriptions[index]} ({value})
    </option>
  ));

  return (
    <select value={dotValue} onChange={onChange}>
      <option value={0}>(not prioritized)</option>
      {optionElements}
    </select>
  );
};

Priority.defaultProps = {
  dotValue: 0,
};

export default Priority;
