import React from 'react';
import Dots from './Dots';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="App">
      <Dots level={3} max={4} onClick={handleClick} />
    </div>
  );
}

export default App;
