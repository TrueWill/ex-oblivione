import React from 'react';
import Trait from './Trait';
import Specialty from './Specialty';
import { minimumTraitRatingForSpecialty } from '../constants/characterOptions';

interface IProps {
  name: string;
  displayName?: string;
  rating: number;
  maxDots: number;
  onClick: (name: string) => void;
  specialty: string;
  onSpecialtyChange: (specialty: string) => void;
}

const SpecialtyTrait: React.FC<IProps> = ({
  name,
  displayName,
  rating,
  maxDots,
  onClick,
  specialty,
  onSpecialtyChange,
}) => {
  return (
    <div>
      <Trait
        name={name}
        displayName={displayName}
        rating={rating}
        maxDots={maxDots}
        onClick={onClick}
      />
      {rating >= minimumTraitRatingForSpecialty && (
        <Specialty value={specialty} onChange={onSpecialtyChange} />
      )}
    </div>
  );
};

export default SpecialtyTrait;
