import * as React from 'react';
import styles from './Dots.module.css';

const unfilledClass = 'fa fa-circle-thin';
const filledClass = 'fa fa-circle';

interface IProps {
  level?: number;
  max?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Dots: React.FC<IProps> = ({ level = 0, max = 5, onClick }) => {
  const items = Array<string>(max);

  for (let i = 0; i < max; i++) {
    items[i] = i < level ? filledClass : unfilledClass;
  }

  return (
    <div className={styles.dots} onClick={onClick}>
      {items.map((value, index) => (
        <i key={index} className={value} aria-hidden="true" />
      ))}
    </div>
  );
};

export default Dots;
