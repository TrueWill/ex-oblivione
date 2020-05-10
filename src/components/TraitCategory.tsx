import React from 'react';
import SpecialtyTrait from './SpecialtyTrait';
import Section from './Section';
import Priority from './Priority';
import { standardMaxDots } from '../constants/characterOptions';

export interface ICategory {
  priority: number;
  traits: Record<
    string,
    {
      rating: number;
      specialty?: string;
    }
  >;
}

interface IProps {
  categoryParent: Record<string, ICategory>;
  categoryName: string;
  onClick: (name: string) => void;
  onSpecialtyChange: (traitName: string, specialty?: string) => void;
  onPriorityChange: (priority: number) => void;
}

const TraitCategory: React.FC<IProps> = ({
  categoryParent,
  categoryName,
  onClick,
  onSpecialtyChange,
  onPriorityChange,
}) => {
  // Performance: This will render more than necessary.
  const category: ICategory = categoryParent[categoryName];

  const traitNames: string[] = Object.keys(category.traits);

  const traits = traitNames.map((traitName) => {
    const handleSpecialtyChange = (specialty?: string) => {
      onSpecialtyChange(traitName, specialty);
    };

    return (
      <SpecialtyTrait
        key={traitName}
        name={traitName}
        rating={category.traits[traitName].rating}
        maxDots={standardMaxDots}
        onClick={onClick}
        specialty={category.traits[traitName].specialty}
        onSpecialtyChange={handleSpecialtyChange}
      />
    );
  });

  return (
    <Section header={categoryName}>
      <Priority
        dots={[7, 5, 3]}
        priority={category.priority}
        onChange={onPriorityChange}
      />
      {traits}
    </Section>
  );
};

export default TraitCategory;
