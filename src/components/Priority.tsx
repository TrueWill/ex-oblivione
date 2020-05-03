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
  priority: number;
  onChange: (priority: number) => void;
}

const Priority: React.FC<IProps> = ({ dots, priority, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value));
  };

  const optionElements = dots.map((value, index) => (
    <option key={index + 1} value={index + 1}>
      {descriptions[index]} ({value})
    </option>
  ));

  return (
    <div>
      Priority:
      <select value={priority} onChange={handleChange}>
        {optionElements}
      </select>
    </div>
  );
};

export default Priority;
