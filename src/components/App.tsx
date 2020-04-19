import React from 'react';
import { version } from '../constants/application';
import Dots from './Dots';
import Section from './Section';
import styles from './App.module.css';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="container-fluid">
      <h1>
        Ex Oblivione <span className={styles.version}> v{version}</span>
      </h1>
      <Section header="Character">
        <Dots level={3} max={4} onClick={handleClick} />
      </Section>
      <div className={`row ${styles.attribution}`}>
        <div className="col-sm-12">
          Some terms are copyrighted by or registered trademarks of White Wolf
          Entertainment. This tool is unofficial, and the author is not
          affiliated with the companies mentioned here.
        </div>
      </div>
    </div>
  );
};

export default App;
