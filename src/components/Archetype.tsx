import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectArchetype, setArchetype } from '../state/basicInfo';
import CreatableSelect from 'react-select/creatable';
import { archetypes } from '../constants/characterOptions';

const Archetype: React.FC = () => {
  const archetype = useSelector(selectArchetype);
  const dispatch = useDispatch();

  const handleArchetypeChange = (val: any) => {
    const value: string = val ? val.value : '';
    dispatch(setArchetype(value));
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
