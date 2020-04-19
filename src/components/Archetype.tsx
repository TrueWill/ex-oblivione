import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { archetypes } from '../constants/characterOptions';

interface IProps {
  archetype: string;
  updateArchetype: (s: string) => void;
}

const Archetype: React.FC<IProps> = ({ archetype, updateArchetype }) => {
  const handleArchetypeChange = (val: any) => {
    const value: string = val ? val.value : '';
    updateArchetype(value);
  };

  const value = archetype
    ? {
        value: archetype,
        label: archetype,
      }
    : null;

  const archetypeOptions = archetypes.map((a) => ({
    value: a,
    label: a,
  }));

  return (
    <div className="row">
      <div className="col-sm-3">Archetype:</div>
      <div className="col-sm-9">
        <CreatableSelect
          isClearable
          value={value}
          options={archetypeOptions}
          onChange={handleArchetypeChange}
        />
      </div>
    </div>
  );
};

export default Archetype;
