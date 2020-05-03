import React from 'react';
import Dots from './Dots';
import styles from './Trait.module.css';

interface IProps {
  name: string;
  displayName?: string;
  rating: number;
  maxDots: number;
  onClick: (name: string) => void;
}

const Trait: React.FC<IProps> = ({
  name,
  displayName,
  rating,
  maxDots,
  onClick,
}) => {
  const handleOnClick = () => {
    onClick(name);
  };

  return (
    <div>
      <div className={styles.name}>{displayName}</div>
      <Dots level={rating} max={maxDots} onClick={handleOnClick} />
    </div>
  );
};

export default Trait;
