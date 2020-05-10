import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TraitCategory from './TraitCategory';
import {
  selectAttributes,
  addDot,
  setSpecialty,
  setPriority,
} from '../state/attributes';

interface IProps {
  categoryName: 'physical' | 'social' | 'mental';
}

const AttributeTraitCategory: React.FC<IProps> = ({ categoryName }) => {
  const attributes = useSelector(selectAttributes);
  const dispatch = useDispatch();

  const handleClick = (traitName: string) => {
    dispatch(addDot({ category: categoryName, trait: traitName as any }));
  };

  const handleSpecialtyChange = (traitName: string, specialty: string) => {
    dispatch(
      setSpecialty({
        category: categoryName,
        trait: traitName as any,
        specialty,
      })
    );
  };

  const handlePriorityChange = (priority: number) => {
    dispatch(setPriority({ category: categoryName, priority }));
  };

  return (
    <TraitCategory
      categoryParent={attributes}
      categoryName={categoryName}
      onClick={handleClick}
      onSpecialtyChange={handleSpecialtyChange}
      onPriorityChange={handlePriorityChange}
    />
  );
};

export default AttributeTraitCategory;
