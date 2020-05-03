import React from 'react';
import { version } from '../constants/application';
import Section from './Section';
import styles from './App.module.css';
import Archetype from './Archetype';
import AttributeTraitCategory from './AttributeTraitCategory';

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <h1>
        Ex Oblivione <span className={styles.version}> v{version}</span>
      </h1>
      <Section header="Character">
        <Archetype />
      </Section>
      <React.StrictMode>
        {/* react-select in Archetype fails StrictMode */}
        <AttributeTraitCategory categoryName="physical" />
        <div className={`row ${styles.attribution}`}>
          <div className="col-sm-12">
            Some terms are copyrighted by or registered trademarks of White Wolf
            Entertainment. This tool is unofficial, and the author is not
            affiliated with the companies mentioned here.
          </div>
        </div>
      </React.StrictMode>
    </div>
  );
};

export default App;
