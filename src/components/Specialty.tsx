import React from 'react';

interface IProps {
  value?: string;
  onChange: (value?: string) => void;
}

const Specialty: React.FC<IProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label>
      Specialty:
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};

export default Specialty;
