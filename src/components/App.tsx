import React from 'react';
import Dots from './Dots';
import Section from './Section';
import './App.css';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="container-fluid">
      <h1>Ex Oblivione</h1>
      <Section header="Character">
        <Dots level={3} max={4} onClick={handleClick} />
      </Section>
    </div>
  );
};

export default App;
